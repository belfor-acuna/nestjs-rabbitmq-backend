import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ward } from "../ward/ward.entity";
import { Applicant } from "../applicant/applicant.entity";

@Entity()
export class Aid {
  @PrimaryGeneratedColumn()
  id_aid: number;

  @Column("decimal", { precision: 10, scale: 2 })
  cost: number;

  @Column()
  duration: string;

  @Column()
  address: string;

  @ManyToOne(() => Ward, (ward) => ward.aids)
  ward: Ward;

  @ManyToOne(() => Applicant, (applicant) => applicant.aids)
  applicant: Applicant;
}
