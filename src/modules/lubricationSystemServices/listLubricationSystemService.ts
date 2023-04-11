import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Request, Response } from "express";

export class ListLubricationSystemServices {
  async execute(request: Request, response: Response): Promise<Response> {
    const tempID = request.query.id;
    const tempDateId = request.query.dateId;
    const tempDateAdd = request.query.dateAdd;

    const lubricationSystemServicesRespository =
    new LubricationSystemServicesRepository();

    if (typeof tempDateAdd == "string") {
      const date = new Date(tempDateAdd);

      const lubricationSystemServices =
        await lubricationSystemServicesRespository.listAddByMonth(date);

      return response.status(200).json(lubricationSystemServices);
    }

    
    if (typeof tempDateId == "string") {
      const date = new Date(tempDateId);

      const lubricationSystemServices =
        await lubricationSystemServicesRespository.listByMonth(date);

      return response.status(200).json(lubricationSystemServices);
    }

    if (typeof tempID == "string") {
      const ERId = tempID;

      const lubricationSystemServices =
        await lubricationSystemServicesRespository.list(ERId);

      return response.status(200).json(lubricationSystemServices);
    }
    return response.status(200).json();
  }
}
