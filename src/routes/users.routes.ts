import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createUserUseCase, listUserUseCase } from "@src/modules/users";
import { response, request, Router } from "express";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  createUserUseCase.execute(request, response);
});

usersRoutes.get("/", (request, response) => {
  listUserUseCase.execute(request, response);
});

export { usersRoutes };
