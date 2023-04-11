import { v4 as uuidV4 } from "uuid";
import {
  Entity,
  CreateDateColumn,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Activities } from "@src/entity/Activities/activities";
import { ERs } from "@src/entity/ERs/ERs";
import { Collaborators } from "../Collaborators/collaborators";

@Entity("LubricationSystemServices")
export class LubrificationSystemServices {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  add: number;

  @Column()
  obs: string;

  @ManyToOne(() => Activities, (activity) => activity.lubrificationSystemServices)
  activity: Activities;

  @ManyToOne(
    () => Collaborators,
    (collaborators) => collaborators.lubrificationSystemServices
  )
  collaborator: Collaborators;

  @ManyToOne(() => ERs, (er) => er.lubrificationSystemServices)
  er: ERs;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
