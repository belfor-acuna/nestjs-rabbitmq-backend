import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Aid } from 'src/aid/aid.entity';
import { ROLES } from './roles/roles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({nullable:true})
  description: string

  @Column()
  password: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phoneNumber: string;

  //Price adjusted by the ward for pricing his services
  @Column({nullable:true})
  pricePerHour:number 

  @Column({unique:true})
  email: string;

  @Column('simple-array')
  roles: ROLES[];

  @Column('simple-array', { nullable: true })
  services: string[];

  @OneToMany(() => Aid, (aid) => aid.ward)
  aidAsWard: Aid[];

  @OneToMany(() => Aid, (aid) => aid.applicant)
  aidAsApplicant: Aid[];
}
