import { PostgresDS } from "@src/data-source";
import { Between, DeleteResult, In, MoreThanOrEqual  } from "typeorm";
import {
  ILubricationSystemServicesRepository,
  ICreateLubricationSystemServiceDTO,
  IDeleteLubricationSystemServiceDTO,
  IListLubricationSystemService,
} from "./ILubrificationSystemServicesRepository";
import { LubrificationSystemServices } from "./lubrificationSystemServices";

class LubricationSystemServicesRepository
  implements ILubricationSystemServicesRepository
{
  async create(
    data: ICreateLubricationSystemServiceDTO
  ): Promise<LubrificationSystemServices> {
    const product = new LubrificationSystemServices();

    product.activity = data.activity;
    product.add = data.add;
    product.obs = data.obs;
    product.collaborator = data.collaborator;
    product.er = data.er;

    await PostgresDS.manager.save(product);

    return product;
  }

  async listAddByMonth(date: Date): Promise<LubrificationSystemServices[]> {
    const query = PostgresDS.manager
      .createQueryBuilder(
        LubrificationSystemServices,
        "LubrificationSystemServices"
      )
      .select(`date_trunc('day', "createdAt") As date, sum(add) AS count`)
      .where(`date_part('year', "createdAt") = ${date.getFullYear()}`)
      .where(`date_part('month', "createdAt") = ${date.getMonth() + 1}`)
      .groupBy(`1`);

    const lubrificationSystemServices = await query.execute();

    return lubrificationSystemServices;
  }

  async listByMonth(date: Date): Promise<LubrificationSystemServices[]> {
    const query = PostgresDS.manager
      .createQueryBuilder(
        LubrificationSystemServices,
        "LubrificationSystemServices"
      )
      .select(`date_trunc('day', "createdAt") As date, count(id) AS count`)
      .where(`date_part('year', "createdAt") = ${date.getFullYear()}`)
      .where(`date_part('month', "createdAt") = ${date.getMonth() + 1}`)
      .groupBy(`1`);

    const lubrificationSystemServices = await query.execute();

    return lubrificationSystemServices;
  }

  // async list(ERId: string): Promise<LubrificationSystemServices[]> {
  //   const LubricationSystemServicesRepository =
  //     PostgresDS.manager.getRepository(LubrificationSystemServices);

  //   let whereConstrant = {};

  //   const result = await LubricationSystemServicesRepository.find({
  //     relations: {
  //       activity: true,
  //       collaborator: true,
  //       er: true,
  //     },
  //     where: {
  //       er: {
  //         id: ERId,
  //       },
  //     },
  //   });

  //   return result;
  // }

  async list(
    filter: IListLubricationSystemService
  ): Promise<LubrificationSystemServices[]> {
    const lsRepository =
      PostgresDS.manager.getRepository(LubrificationSystemServices);

    let whereConstrant = {};

    if (filter.dateBegin && !filter.dateEnd) {
      whereConstrant = {
        ...whereConstrant,
        createdAt: MoreThanOrEqual(filter.dateBegin),
      };
    }

    if (filter.dateBegin && filter.dateEnd) {
      whereConstrant = {
        ...whereConstrant,
        createdAt: Between(filter.dateBegin, filter.dateEnd),
      };
    }

    const result = await lsRepository.find({
      relations: {
        activity: true,
        collaborator: true,
        er: {
          zone:true
        }
        
      },
      where: whereConstrant
    });

    return result;
  }

  async deleteById(
    data: IDeleteLubricationSystemServiceDTO
  ): Promise<DeleteResult> {
    const LubricationSystemServicesRepository =
      PostgresDS.manager.getRepository(LubrificationSystemServices);

    const result = await LubricationSystemServicesRepository.delete({
      id: In(data.ids),
    });

    return result;
  }
}

export { LubricationSystemServicesRepository };
  function BiggerThan(dateBegin: Date, dateEnd: undefined) {
    throw new Error("Function not implemented.");
  }

