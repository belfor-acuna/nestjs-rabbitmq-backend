import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AidStatus } from "./enum/status.enum";
import { RabbitmqService } from "src/rabbitmq/rabbitmq.service";

@Injectable()
export class AidService {
  constructor(
    private userService: UserService,
    private rabbitMqService: RabbitmqService,
    @InjectRepository(Aid) private aidsRepository: Repository<Aid>
  ) {}

  async createAidRequest(
    applicantId: number,
    wardId: number,
    service: string
  ){
    const ward = await this.userService.findOne(wardId);
    const applicant = await this.userService.findOne(applicantId);
    if (!ward) {
      throw new Error(`Ward with id ${wardId} not found`);
    }

    const aidRequest = new Aid();
    aidRequest.applicant = applicant;
    aidRequest.ward = ward;
    aidRequest.address = applicant.address || "Default Address";
    aidRequest.service = service;
    aidRequest.status = AidStatus.PENDING;
    this.aidsRepository.save(aidRequest)
    return await this.rabbitMqService.placeAidRequest(aidRequest);
  }
  async findPendingAidsForWard(wardId: number): Promise<Aid[]> {
    return this.aidsRepository.find({
      where: {
        ward: { id: wardId },
        status: AidStatus.PENDING,
      },
    });
  }

  async acceptAidRequest(aidId: number, wardId: number): Promise<Aid> {
    const ward = await this.userService.findOne(wardId);
    const aid = await this.findAid(aidId);
    if (aid.ward.id !== ward.id) {
      throw new Error(
        `Aid with id ${aidId} does not belong to ward with id ${wardId}`
      );
    }
    aid.status = AidStatus.ACCEPTED;
    return this.aidsRepository.save(aid);
  }

  async rejectAidRequest(aidId: number, wardId: number): Promise<Aid> {
    const ward = await this.userService.findOne(wardId);
    const aid = await this.findAid(aidId);
    if (aid.ward.id !== ward.id) {
      throw new Error(
        `Aid with id ${aidId} does not belong to ward with id ${wardId}`
      );
    }
    aid.status = AidStatus.REJECTED;
    return this.aidsRepository.save(aid);
  }

  async finishAid(aidId:number,userId: number): Promise<Aid>{
    const user = await this.userService.findOne(userId);
    const aid = await this.findAid(aidId);
    if (aid.ward.id === user.id || aid.applicant.id === user.id){
      aid.status = AidStatus.COMPLETED
      return this.aidsRepository.save(aid);
    }else{
      throw new Error (`Aid with id ${aidId} does not belong to user with id ${userId}`)
    }
  }

  async findAid(aidId: number): Promise<Aid> {
    const aid = await this.aidsRepository
      .createQueryBuilder("aid")
      .leftJoinAndSelect("aid.ward", "ward")
      .leftJoinAndSelect("aid.applicant", "applicant")
      .where("aid.id = :id", { id: aidId })
      .getOne();

    console.log("Aid encontrado: " + JSON.stringify(aid, null, 2));
    if (!aid) {
      throw new Error(`Aid with id ${aidId} not found :c`);
    }
    return aid;
  }
}
