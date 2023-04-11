import { CreateCollaboratorUseCase } from "./createCollaboratorUseCase";
import { DeleteCollaboratorUseCase } from "./deleteCollaboratorUseCase";
import { ListCollaboratorUseCase } from "./listCollaboratorUseCase";
import { UpdateCollaboratorUseCase } from "./updateCollaboratorUseCase";



const listCollaboratorUseCase = new ListCollaboratorUseCase()
const createCollaboratorUseCase = new CreateCollaboratorUseCase();
const deleteCollaboratorUseCase = new DeleteCollaboratorUseCase();
const updateCollaboratorUseCase = new UpdateCollaboratorUseCase();

export{
    listCollaboratorUseCase, 
    createCollaboratorUseCase,
    deleteCollaboratorUseCase,
    updateCollaboratorUseCase,
}