import { ERsRepository } from "@src/entity/ERs/ERsRepository";
import { Request, Response } from "express";

export class ListERs {
  async execute(request: Request, response: Response): Promise<Response> {
    const groupByMonth = request.query?.groupByMonth;
    const dateOfNewTreatment = request.query?.dateOfNewTreatment;

    const ersRespository = new ERsRepository();

    const ers = await ersRespository.listER();

    return response.status(200).json(ers);
  }
}
