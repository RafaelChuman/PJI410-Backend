import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { LubrificationSystemServices } from "../LubricationSystemServices/lubrificationSystemServices";

@Entity("Activities")
export class Activities
{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> LubrificationSystemServices, (lubrificationSystemServices) => lubrificationSystemServices.activity)
    lubrificationSystemServices: LubrificationSystemServices[]

    constructor()
    {
        if(!this.id)
        {
            this.id = uuidv4();
        }
    }
}