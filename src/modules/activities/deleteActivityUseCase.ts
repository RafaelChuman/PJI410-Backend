import { ActivitiesRepository } from "@src/entity/Activities/activitiesRepository";
import { IDeleteActivityDTO } from "@src/entity/Activities/IActivitiesRepository";
import { Response, Request } from "express";

class DeleteActivityUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam: string[] = request.body.ids;

    if (idParam.length > 0) {
      const data: IDeleteActivityDTO = {
        ids: idParam,
      };

      const collaboratorsRepository = new ActivitiesRepository();

      const resp = await collaboratorsRepository.deleteActivityById(data);

      return response.status(200).json(resp);
    }

    return response.status(200).json("Database not modified.");
  }
}

export { DeleteActivityUseCase };
