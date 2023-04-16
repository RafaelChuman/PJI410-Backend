import { DeleteResult } from "typeorm";
import { OilMonitor } from "./oilMonitor";

interface ICreateOilMonitorDTO {
    oilLevel: number;
}

interface IListOilMonitorByER {
    ERId: string;
}

interface IDeleteOilMonitorDTO {
    ids: string[]
}

interface IOilMonitorRepository {

    createOilMonitor(data: ICreateOilMonitorDTO): Promise<OilMonitor | null>;
    listOilMonitorByER(data: IListOilMonitorByER): Promise<OilMonitor[] | null>;
    deleteOilMonitor(data: IDeleteOilMonitorDTO): Promise<DeleteResult>;

}

export { IOilMonitorRepository, IDeleteOilMonitorDTO, IListOilMonitorByER, ICreateOilMonitorDTO }