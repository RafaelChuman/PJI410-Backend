import { Request, Response } from "express";
import { ICreateOilMonitorDTO } from "@entity/OilMonitor/IOilMonitorRepository";
import { OilMonitorRepository } from "@src/entity/OilMonitor/oiMonitorRepository";

export class CreateOilMonitor {
    async execute(request: Request, response: Response): Promise<Response> {

        const data: ICreateOilMonitorDTO = request.body;

        const oilMonitorRepository = new OilMonitorRepository()

        const resp = await oilMonitorRepository.createOilMonitor(data);

        return response.status(201).json(resp);
    }
}