import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";

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

  @ManyToOne(() => User, (user) => user.aidAsWard, { nullable: true })
  ward: User;

  @ManyToOne(() => User, (user) => user.aidAsApplicant, { nullable: true })
  applicant: User;
}