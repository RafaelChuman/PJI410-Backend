import { ICreateLubricationSystemServiceDTO } from "@src/entity/LubricationSystemServices/ILubrificationSystemServicesRepository";
import { LubricationSystemServicesRepository } from "@src/entity/LubricationSystemServices/lubrificationSystemServicesRepository";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export class CreateLubricationSystemService {
  async execute(request: Request, response: Response): Promise<Response> {
    const lubricationSystemServiceRespository =
      new LubricationSystemServicesRepository();
    const datas: ICreateLubricationSystemServiceDTO =
      request.body.lubrificationSystems;

      await lubricationSystemServiceRespository.create(datas);

    return response.status(200).json("");
  }
}
