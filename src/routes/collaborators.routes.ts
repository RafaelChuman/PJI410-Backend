import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createCollaboratorUseCase, deleteCollaboratorUseCase, listCollaboratorUseCase, updateCollaboratorUseCase } from "@src/modules/collaborators";
import { response, request, Router } from "express";

const collaboratorsRoutes = Router();

collaboratorsRoutes.post("/", (request, response) => {
  createCollaboratorUseCase.execute(request, response);
});

collaboratorsRoutes.get("/", (request, response) => {
  listCollaboratorUseCase.execute(request, response);
});

collaboratorsRoutes.delete("/", (request, response) => {
  deleteCollaboratorUseCase.execute(request, response);
});

collaboratorsRoutes.put("/", (request, response) => {
  updateCollaboratorUseCase.execute(request, response);
});



export { collaboratorsRoutes };
