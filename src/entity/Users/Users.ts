import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";

@Entity("Users")
export class Users {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    userName: string

    @Column()
    password: string

    @Column()
    isAdmin: boolean

    @CreateDateColumn()
    createdAt: Date


    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
            this.isAdmin = false;
        }
    }

}



