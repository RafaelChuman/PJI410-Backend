import { CollaboratorsRepository } from "@src/entity/Collaborators/collaboratorsRepository";
import { AppError } from "@src/errors/AppError";
import { Response, Request } from "express";

class ListCollaboratorUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const collaboratorRespository = new CollaboratorsRepository();
    const collaboratorName = request.query?.CollaboratorName;
    const groupByMonth = request.query?.groupByMonth;

    if (collaboratorName) {
      if (typeof collaboratorName === "string") {
        const Collaborator = await collaboratorRespository.findByCollaboratorName(collaboratorName);

        return response.status(200).json(Collaborator);
      }
    }

    if (groupByMonth) {
      // if(monthFormatDate <0 || monthFormatDate > 12) throw new AppError("Parâmetros Incorretos", 400)

      const collaborators = await collaboratorRespository.listAllCollaboratorsGroupedByMonth();

      return response.status(200).json(collaborators);
    }
    const collaborators = await collaboratorRespository.list();

    return response.status(201).json(collaborators);
  }
}

export { ListCollaboratorUseCase };
