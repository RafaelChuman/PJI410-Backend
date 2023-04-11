import { IDeleteZoneDTO } from "@src/entity/Zones/IZonesRepository";
import { ZonesRepository } from "@src/entity/Zones/ZonesRepository";
import { Response, Request, response } from "express";

class DeleteZoneUseCase {
  async execute(request: Request, response: Response): Promise<Response> {
    const idParam : string[] = request.body.ids;

    if (idParam.length > 0) {
      
      const data: IDeleteZoneDTO = { ids: idParam };

      const zoneRepository = new ZonesRepository();

      const resp = await zoneRepository.deleteZone(data);


      return response.status(200).json(resp);
    }

    return response.status(200).json("Database not modified.");
  }
}

export { DeleteZoneUseCase };

