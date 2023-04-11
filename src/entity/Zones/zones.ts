import { v4 as uuidv4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ERs } from "../ERs/ERs";

@Entity("Zones")
export class Zones
{

    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @CreateDateColumn()
    createdAt: Date

    @OneToMany(()=> ERs, (ers) => ers.zone)
    ers: ERs[]

    constructor()
    {
        if(!this.id)
        {
            this.id = uuidv4();
        }
    }
}