import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Aid } from "../aid/aid.entity";

@Entity()
export class Ward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @OneToMany(() => Aid, (aid) => aid.ward)
  aids: Aid[];
}
