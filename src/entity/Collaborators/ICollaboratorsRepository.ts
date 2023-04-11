import { DeleteResult, UpdateResult } from "typeorm";
import { Collaborators } from "./collaborators";

interface ICreateCollaboratorDTO {
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}

interface IDeleteCollaboratorDTO {
  ids: string[];
}

interface IUpdateCollaboratorDTO {
  id: string;
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}



interface ICollaboratorsRepository {
  create(data: ICreateCollaboratorDTO): Promise<Collaborators>;
  findByCollaboratorName(CollaboratorName: string): Promise<Collaborators | null>;
  // findByEmail(email: string): Collaborator | undefined;
  // turnAdmin(Collaborator: Collaborator): Collaborator;
  list(): Promise<Collaborators[]>;
  findById(IdParm: string): Promise<Collaborators | null>;

  deleteById(data: IDeleteCollaboratorDTO): Promise<DeleteResult>;

  listAllCollaboratorsGroupedByMonth(): Promise<Collaborators[]>;

  updateCollaborator(data: IUpdateCollaboratorDTO): Promise<Collaborators | null>;
}

export { ICollaboratorsRepository, ICreateCollaboratorDTO, IDeleteCollaboratorDTO, IUpdateCollaboratorDTO};
