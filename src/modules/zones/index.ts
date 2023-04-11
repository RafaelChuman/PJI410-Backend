import { CreateZoneUseCase } from "./createZoneUseCase";
import { DeleteZoneUseCase } from "./deleteZoneUseCase";
import { ListZoneUseCase } from "./listZoneUseCase";
import { UpdateZoneUseCase } from "./updateZoneUseCase";




const createZoneUseCase = new CreateZoneUseCase();
const listZoneUseCase = new ListZoneUseCase();
const deleteZoneUseCase = new DeleteZoneUseCase();
const updateZoneUseCase = new UpdateZoneUseCase();

export {createZoneUseCase, listZoneUseCase, deleteZoneUseCase, updateZoneUseCase}


