import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Aid } from 'src/aid/aid.entity';
import { ROLES} from './user.roles';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

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

  @Column({
    type: 'enum',
    enum: ROLES,
    default: ROLES.APPLICANT,
  })
  role: string;

  @Column('simple-array')
  services: string[];

  @OneToMany(() => Aid, (aid) => aid.ward)
  aidAsWard: Aid[];

  @OneToMany(() => Aid, (aid) => aid.applicant)
  aidAsApplicant: Aid[];
}
