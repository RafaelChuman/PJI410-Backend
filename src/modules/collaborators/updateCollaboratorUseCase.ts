

import { CollaboratorsRepository } from "@src/entity/Collaborators/collaboratorsRepository";
import { IUpdateCollaboratorDTO } from "@src/entity/Collaborators/ICollaboratorsRepository";
import { Response, Request, response } from "express";



class UpdateCollaboratorUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: IUpdateCollaboratorDTO = {
      id: request.body.id,
      name:   request.body.name,
      cep: request.body.cep,
      cellphone: request.body.cellphone,
      numberAddress:request.body.numberAddress,
      whatsApp:request.body.whatsApp,
    };

    const zoneRepository = new CollaboratorsRepository();

    const resp = await zoneRepository.updateCollaborator(data);

    return response.status(200).json(resp);
}
}

export { UpdateCollaboratorUseCase };
