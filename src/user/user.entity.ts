import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Aid } from 'src/aid/aid.entity';
import { ROLES } from './roles/roles.enum';
import { Service } from 'src/service/service.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
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

  @Column()
  email: string;

  @Column('simple-array')
  roles: ROLES[];

  @ManyToMany(() => Service)
  @JoinTable()
  services: Service[];

  @OneToMany(() => Aid, (aid) => aid.ward)
  aidAsWard: Aid[];

  @OneToMany(() => Aid, (aid) => aid.applicant)
  aidAsApplicant: Aid[];
}
