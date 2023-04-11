import { DeleteResult } from "typeorm";
import { Zones } from "../Zones/zones";
import { ERs } from "./ERs";

interface ICreateERDTO{
    number: number;
    zone: string;
};

interface IListERByZoneId{
    zoneId: string;
}

interface IDeleteERDTO{
    ids: string[];
};

interface IERsRepository{
    
    createER(data: ICreateERDTO): Promise<ERs | null>;
    listER(): Promise<ERs[]|undefined>;
    listERByZoneId(data: IListERByZoneId): Promise<ERs[] | null>;
    deleteERById(data: IDeleteERDTO): Promise<DeleteResult>;
    listAllERsGroupedByMonth(): Promise<ERs[]>;
    listAllERsProductToBuy(data:Date): Promise<ERs[]>;
    
};

export {IERsRepository, ICreateERDTO, IListERByZoneId, IDeleteERDTO};