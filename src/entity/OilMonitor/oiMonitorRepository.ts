import { Between, DeleteResult, In } from "typeorm";
import {
  ICreateOilMonitorDTO,
  IDeleteOilMonitorDTO,
  IListOilMonitorByER,
  IOilMonitorRepository,
  IListOilMonito1,
} from "./IOilMonitorRepository";
import { OilMonitor } from "./oilMonitor";
import { PostgresDS } from "@src/data-source";
import { ERs } from "../ERs/ERs";

class OilMonitorRepository implements IOilMonitorRepository {
  async createOilMonitor(
    data: ICreateOilMonitorDTO
  ): Promise<OilMonitor | null> {
    const erRep = PostgresDS.manager.getRepository(ERs);
    const erToSave = await erRep.find({
      where: {
        id: data.ERId,
      },
    });

    const newOilMonitor = new OilMonitor();
    newOilMonitor.oilLevel = data.oilLevel;
    newOilMonitor.er = erToSave[0];

    const resp = await PostgresDS.manager.save(newOilMonitor);

    return resp;
  }

  async listOilMonitorByER(
    data: IListOilMonitorByER
  ): Promise<OilMonitor[] | null> {
    const oilMonitorRep = PostgresDS.manager.getRepository(OilMonitor);

    const result = await oilMonitorRep.find({
      relations: {
        er: true,
      },
      where: {
        er: {
          id: In(data.ERId),
        },
      },
    });

    return result;
  }

  async listOilMonitor(data: IListOilMonito1): Promise<OilMonitor[] | null> {
    const oilMonitorRep = PostgresDS.manager.getRepository(OilMonitor);
    let result;

    let whereConstrant = {};

    if (data.ERId)
      whereConstrant = {
        ...whereConstrant,
        er: {
          id: In(data.ERId),
        },
      };

    if (data.dateBegin && data.dateEnd) {
      whereConstrant = {
        ...whereConstrant,
        createdAt: Between(data.dateBegin, data.dateEnd),
      };
      
    }

    result = await oilMonitorRep.find({
      relations: {
        er: {
          zone:true
        }
      },
      where: whereConstrant,
    });

    return result;
  }

  async deleteOilMonitor(data: IDeleteOilMonitorDTO): Promise<DeleteResult> {
    const oilMonitorRep = PostgresDS.manager.getRepository(OilMonitor);

    const result = await oilMonitorRep.delete({
      id: In(data.ids),
    });

    return result;
  }
}

export { OilMonitorRepository };
