import {
  ICreateERDTO,
  IDeleteERDTO,
  IERsRepository,
  IListERByZoneId,
} from "./IERsRepository";
import { ERs } from "./ERs";
import { PostgresDS } from "@src/data-source";
import { DeleteResult, In } from "typeorm";
import { ZonesRepository } from "../Zones/ZonesRepository";

export class ERsRepository implements IERsRepository {
  async createER(data: ICreateERDTO): Promise<ERs | null> {
    const newER = new ERs();
    const zoneRepository = new ZonesRepository();

    const zone = await zoneRepository.findZonesById(data.zone);

    if(zone == null)
      return null;

    newER.number = data.number;
    newER.zone = zone;

    await PostgresDS.manager.save(newER);

    return newER;
  }

  async listERByZoneId(data: IListERByZoneId): Promise<ERs[] | null>{
    const er = await PostgresDS.manager.find(ERs);

    return er;
  }

  async listAllERsProductToBuy(data: Date): Promise<ERs[]> {
    const dateAsString = data.toISOString().slice(0, 10);

    const query = PostgresDS.manager
      .createQueryBuilder(ERs, "t")
      .innerJoinAndSelect("t.products", "p")
      .innerJoinAndSelect("t.clients", "c")
      .where(
        `(('${dateAsString}'::date - "t"."createdAt"::date) * "t"."quantityOfProductPerDay") >=  ("t"."quantityOfProduct" * "p"."quantityValue")`
      );

    const ers = await query.getMany();

    return ers;
  }

  async listAllERsGroupedByMonth(): Promise<ERs[]> {
    const query = PostgresDS.manager
      .createQueryBuilder(ERs, "ERs")
      .select(`count("ersId"), DATE_TRUNC('month', "createdAt")`)
      .where(`date_part('year', "createdAt") = date_part('year', CURRENT_DATE)`)
      .groupBy(`DATE_TRUNC('month', "createdAt"), "ersId"`);

    const ers = await query.execute();

    return ers;
  }

  async listER(): Promise<ERs[] | undefined> {
    //const ers = await PostgresDS.manager.find(ERs);
    // const query = PostgresDS.manager
    //   .createQueryBuilder<ERs>("ERs", "t")
    //   .innerJoinAndSelect("t.products", "p")
    //   .innerJoinAndSelect("t.clients", "c"); // 'w.userId = u.id' may be omitted
    // const ers = await query.getMany();

    // return ers;
    const ers =
    PostgresDS.manager.getRepository(ERs);

   const result = await ers.find({
     relations: {
       zone: true,
     },
    });

    return result;
  }

  async deleteERById(data: IDeleteERDTO): Promise<DeleteResult> {
    const deletedER = await PostgresDS.manager.delete(ERs, {
      id: In(data.ids),
    });

    return deletedER;
  }
}
