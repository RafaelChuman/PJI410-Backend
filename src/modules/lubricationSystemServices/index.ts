import { CreateLubricationSystemService } from "./createLubricationSystemSerivce";
import { DeleteLubricationSystemService } from "./deleteLubricationSystemSerivce";
import { ListLubricationSystemServices } from "./listLubricationSystemService";

const createLubricationSystemService = new CreateLubricationSystemService();
const listLubricationSystemServices = new ListLubricationSystemServices();
const deleteLubricationSystemService = new DeleteLubricationSystemService()

export { createLubricationSystemService, listLubricationSystemServices, deleteLubricationSystemService };
