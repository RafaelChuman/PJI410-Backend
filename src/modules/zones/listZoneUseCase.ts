
import { ZonesRepository } from "@src/entity/Zones/ZonesRepository";
import { Response, Request } from "express";



class ListZoneUseCase{

    async execute(request: Request, response: Response): Promise<Response>{
        const productRepository = new ZonesRepository();

        const resp = await productRepository.listZones();
        
        return response.status(200).json(resp);
    }

}

export {ListZoneUseCase}