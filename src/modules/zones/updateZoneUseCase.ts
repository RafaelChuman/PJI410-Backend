

import { IUpdateZoneDTO } from "@src/entity/Zones/IZonesRepository";
import { ZonesRepository} from '@src/entity/Zones/ZonesRepository'
import { Response, Request, response } from "express";



class UpdateZoneUseCase {
  

  async execute(request:Request, response:Response): Promise<Response>{
    const data: IUpdateZoneDTO = {
      id: request.body.id,
      name:   request.body.name,
    };

    const zoneRepository = new ZonesRepository();

    const resp = await zoneRepository.updateZone(data);

    return response.status(200).json(resp);
}
}

export { UpdateZoneUseCase };
