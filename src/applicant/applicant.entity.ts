import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Aid } from "src/aid/aid.entity";
@Entity()
export class Applicant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstNAme: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @OneToMany(() => Aid, (aid) => aid.applicant)
  aids: Aid[];
}
