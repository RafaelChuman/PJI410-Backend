import { CreateER } from "./createERs";
import { DeleteER } from "./deleteERs";
import { ListERs } from "./listERs";

const createER = new CreateER();
const listERs = new ListERs();
const deleteERs = new DeleteER();

export { createER, listERs, deleteERs };
