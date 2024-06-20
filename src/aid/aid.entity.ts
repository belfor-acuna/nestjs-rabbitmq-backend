import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";
import { AidStatus } from "./enum/status.enum";

@Entity()
export class Aid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("decimal", { precision: 10, scale: 2, nullable:true })
  cost: number;

  @Column({nullable:true})
  duration: string;

  @Column()
  service: string;

  @Column()
  address: string;

  @Column({ type: 'enum', enum: AidStatus, default: AidStatus.PENDING })
  status: AidStatus;

  @ManyToOne(() => User, (user) => user.aidAsWard)
  ward: User;

  @ManyToOne(() => User, (user) => user.aidAsApplicant)
  applicant: User;
}