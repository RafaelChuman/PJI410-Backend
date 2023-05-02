import { DeleteResult } from "typeorm";
import { OilMonitor } from "./oilMonitor";

interface ICreateOilMonitorDTO {
    oilLevel: number;
    ERId: string;
}

interface IListOilMonitorByER {
    ERId: string[];
    dateBegin?: Date;
    dateEnd?: Date;
}

interface IListOilMonito1 {
    ERId?: string[];
    dateBegin?: Date;
    dateEnd?: Date;
}

interface IDeleteOilMonitorDTO {
    ids: string[]
}

interface IOilMonitorRepository {

    createOilMonitor(data: ICreateOilMonitorDTO): Promise<OilMonitor | null>;
    listOilMonitorByER(data: IListOilMonitorByER): Promise<OilMonitor[] | null>;
    listOilMonitor(data: IListOilMonito1): Promise<OilMonitor[] | null>;
    deleteOilMonitor(data: IDeleteOilMonitorDTO): Promise<DeleteResult>;

}

export { IOilMonitorRepository, IDeleteOilMonitorDTO, IListOilMonitorByER, ICreateOilMonitorDTO, IListOilMonito1 }