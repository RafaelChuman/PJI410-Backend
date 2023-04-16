import { DeleteResult, In } from "typeorm";
import { ICreateOilMonitorDTO, IDeleteOilMonitorDTO, IListOilMonitorByER, IOilMonitorRepository } from "./IOilMonitorRepository";
import { OilMonitor } from "./oilMonitor";
import { PostgresDS } from "@src/data-source";

class OilMonitorRepository implements IOilMonitorRepository {
    async createOilMonitor(data: ICreateOilMonitorDTO): Promise<OilMonitor | null> {
        const newOilMonitor = new OilMonitor();

        newOilMonitor.oilLevel = data.oilLevel;

        const resp = await PostgresDS.manager.save(newOilMonitor);

        return resp;
    }

    async listOilMonitorByER(data: IListOilMonitorByER): Promise<OilMonitor[] | null> {

        const oilMonitorRep = PostgresDS.manager.getRepository(OilMonitor);

        const result = await oilMonitorRep.find({
            relations: {
                er: true,
            },
            where: {
                er: {
                    id: data.ERId
                }
            }
        })

        return result;

    }
    async deleteOilMonitor(data: IDeleteOilMonitorDTO): Promise<DeleteResult> {
        const oilMonitorRep = PostgresDS.manager.getRepository(OilMonitor);

        const result = await oilMonitorRep.delete({
            id: In(data.ids)
        });

        return result;
    }
}

export { OilMonitorRepository }