import { IListLubricationSystemService } from "@src/entity/LubricationSystemServices/ILubrificationSystemServicesRepository";
import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Console } from "console";
import { Request, Response } from "express";

export class ListLubricationSystemServices {
  async execute(request: Request, response: Response): Promise<Response> {
    const lubricationSystemServicesRespository =
      new LubricationSystemServicesRepository();

    const data: IListLubricationSystemService = request.query;

    if (data.dateBegin) {
      try {
        data.dateBegin = new Date(data.dateBegin);
      } catch {
        return response.status(500).json();
      }
    }

    if (data.dateEnd) {
      try {
        data.dateEnd = new Date(data.dateEnd);
      } catch {
        return response.status(500).json();
      }
    }

    const lubricationSystemServices =
      await lubricationSystemServicesRespository.list(data);

    return response.status(200).json(lubricationSystemServices);
  }
}
