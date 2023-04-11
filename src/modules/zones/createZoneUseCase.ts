

import { ICreateZoneDTO } from "@src/entity/Zones/IZonesRepository";
import { ZonesRepository} from '@src/entity/Zones/ZonesRepository'
import { Response, Request, response } from "express";



class CreateZoneUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: ICreateZoneDTO = {
      name:   request.body.name,
    };

    const zoneRepository = new ZonesRepository();

    const resp = await zoneRepository.createZone(data);

    return response.status(200).json(resp);
}
}

export { CreateZoneUseCase };
