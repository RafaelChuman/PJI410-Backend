import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { ICreateCollaboratorDTO } from "@src/entity/Collaborators/ICollaboratorsRepository";
import { CollaboratorsRepository } from "@src/entity/Collaborators/collaboratorsRepository";

class CreateCollaboratorUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const data: ICreateCollaboratorDTO = {
      cellphone: request.body.cellphone,
      cep: request.body.cep,
      name: request.body.name,
      numberAddress: request.body.numberAddress,
      whatsApp: request.body.whatsApp,
    };
    const collaboratorsRepository = new CollaboratorsRepository();

    const collaboratorNameAlredyExist = await collaboratorsRepository.findByCollaboratorName(data.name);

    if (collaboratorNameAlredyExist) {
      return response.status(200).json("Collaborator Already Exists.");
    }

    const resp = await collaboratorsRepository.create(data);

    return response.status(200).json(resp);
  }
}

export { CreateCollaboratorUseCase };
