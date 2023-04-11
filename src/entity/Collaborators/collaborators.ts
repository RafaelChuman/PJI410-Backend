import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { LubrificationSystemServices } from "../LubricationSystemServices/lubrificationSystemServices";

@Entity("Collaborators")
export class Collaborators {

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    cep: string

    @Column()
    numberAddress: string

    @Column()
    cellphone: string

    @Column()
    whatsApp: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=>LubrificationSystemServices, lubrificationSystemServices => lubrificationSystemServices.collaborator)
    lubrificationSystemServices: LubrificationSystemServices[];

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}



