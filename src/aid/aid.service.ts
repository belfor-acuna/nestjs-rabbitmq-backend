import { Injectable } from "@nestjs/common";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Aid } from "./aid.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AidStatus } from "./enum/status.enum";

@Injectable()
export class AidService {
  constructor(
    private userService: UserService,
    @InjectRepository(Aid) private aidsRepository: Repository<Aid>
  ) {}

  async createAidRequest(applicantId: number, wardId: number, service: string): Promise<Aid> {
    const ward = await this.userService.findOne(wardId);
    const applicant = await this.userService.findOne(applicantId)
    if (!ward) {
      throw new Error(`Ward with id ${wardId} not found`);
    }

    const aidRequest = new Aid();
    aidRequest.applicant = applicant;
    aidRequest.ward = ward;
    aidRequest.address = applicant.address || "Default Address";
    aidRequest.service = service;
    aidRequest.status = AidStatus.PENDING;

    return this.aidsRepository.save(aidRequest);
  }
  async findPendingAidsForWard(wardId: number): Promise<Aid[]> {
    return this.aidsRepository.find({
      where: {
        ward: { id: wardId },
        status: AidStatus.PENDING,
      },
      relations: ["ward", "applicant"],
    });
  }
}
