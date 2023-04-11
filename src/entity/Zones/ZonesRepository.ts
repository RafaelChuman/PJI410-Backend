import { PostgresDS } from "@src/data-source";
import { AppError } from "@src/errors/AppError";
import { DeleteResult, In } from "typeorm";
import { Zones } from "./zones";
import { IZonesRepository, ICreateZoneDTO, IDeleteZoneDTO, IUpdateZoneDTO } from "./IZonesRepository";

class ZonesRepository implements IZonesRepository{
    async listZones(): Promise<Zones[]> {
        const zones = await PostgresDS.manager.find(Zones);
        
        return zones;
    }

    async findZonesById(id: string): Promise<Zones | null> {
        const zone = await PostgresDS.manager.findOneBy(Zones ,{
            id: id
        });
        
        return zone;
    }

    async createZone(zone: ICreateZoneDTO): Promise<Zones> {
    
        const newZone = new Zones();

        newZone.name = zone.name;

        await PostgresDS.manager.save(newZone);
    
        return newZone;
    }

    async deleteZone(zone: IDeleteZoneDTO): Promise<DeleteResult> {
        
        return await PostgresDS.manager.delete(
            Zones, {
                id: In(zone.ids) 
            });
    }

    async updateZone(zone: IUpdateZoneDTO): Promise<Zones | null> {
        
        const updtZone = await PostgresDS.manager.findOneBy(
            Zones, {
                id: zone.id
            });
        
        if(!updtZone) return null;

        updtZone.name = zone.name;

        await PostgresDS.manager.save(Zones, updtZone);

        return updtZone;
    }
}

export {ZonesRepository}