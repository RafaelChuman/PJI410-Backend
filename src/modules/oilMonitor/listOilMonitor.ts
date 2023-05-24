import { IListOilMonito1, IListOilMonitorByER } from "@src/entity/OilMonitor/IOilMonitorRepository";
import { OilMonitorRepository } from "@src/entity/OilMonitor/oiMonitorRepository";
import { Request, Response } from "express";


export class ListOilMonitor {
    async execute(req: Request, resp: Response): Promise<Response> {

        const data: IListOilMonito1 = req.query;

        const oilMonitorRepository = new OilMonitorRepository();

        const response = await oilMonitorRepository.listOilMonitor(data);

        return resp.status(200).json(response);
    }
}