import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ERs } from "../ERs/ERs";
import { v4 as uuidv4 } from "uuid";


@Entity("OilMonitor")
export class OilMonitor {
    @PrimaryColumn()
    id: string;

    @Column()
    oilLevel: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => ERs, (er) => er.oilMonitor)
    er: ERs;

    constructor() {
        if (this.id === undefined) {
            this.id = uuidv4();
        }
    }
}