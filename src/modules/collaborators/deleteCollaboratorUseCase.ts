import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { Response, Request } from "express";
import { IDeleteCollaboratorDTO } from "@src/entity/Collaborators/ICollaboratorsRepository";
import { CollaboratorsRepository } from "@src/entity/Collaborators/collaboratorsRepository";

class DeleteCollaboratorUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam: string[] = request.body.ids;

    if (idParam.length > 0) {
      const data: IDeleteCollaboratorDTO = {
        ids: idParam,
      };
      
      const collaboratorsRepository = new CollaboratorsRepository();

      const resp = await collaboratorsRepository.deleteById(data);

      return response.status(200).json(resp);
    }

    return response.status(200).json("Database not modified.");;
  }
}

export { DeleteCollaboratorUseCase };
