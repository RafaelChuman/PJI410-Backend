import { CreateOilMonitor } from "./createOilMonitor";
import { DeleteOilMonitor } from "./deleteOilMonitor";
import { ListOilMonitor } from "./listOilMonitor";


const createOilMonitor = new CreateOilMonitor();
const deleteOilMonitor = new DeleteOilMonitor();
const listOilMonitor = new ListOilMonitor();

export { createOilMonitor, deleteOilMonitor, listOilMonitor }