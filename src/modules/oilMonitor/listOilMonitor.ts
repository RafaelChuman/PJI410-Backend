import { IListOilMonitorByER } from "@src/entity/OilMonitor/IOilMonitorRepository";
import { OilMonitorRepository } from "@src/entity/OilMonitor/oiMonitorRepository";
import { Request, Response } from "express";


export class ListOilMonitor {
    async execute(req: Request, resp: Response): Promise<Response> {

        const data: IListOilMonitorByER = req.body;

        const oilMonitorRepository = new OilMonitorRepository();

        const response = oilMonitorRepository.listOilMonitorByER(data);

        return resp.status(200).json(response);
    }
}