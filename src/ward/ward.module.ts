import { Module } from "@nestjs/common";
import { WardController } from "./ward.controller";
import { WardService } from "./ward.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ward } from "./ward.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Ward])],
  controllers: [WardController],
  providers: [WardService],
})
export class WardModule {}
