import { User } from "src/user/user.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:false})
    tag:string;
    

    @Column({nullable:false})
    description: string;

    @ManyToMany(() => User, user => user.services)
    service_user: User[];
}