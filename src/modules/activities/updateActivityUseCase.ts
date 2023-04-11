

import { ActivitiesRepository } from "@src/entity/Activities/activitiesRepository";
import { IUpdateActivityDTO } from "@src/entity/Activities/IActivitiesRepository";
import { Response, Request, response } from "express";



class UpdateActivityUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: IUpdateActivityDTO = {
      id: request.body.id,
      name:   request.body.name,
    };

    const zoneRepository = new ActivitiesRepository();

    const resp = await zoneRepository.updateActivity(data);

    return response.status(200).json(resp);
}
}

export { UpdateActivityUseCase };
