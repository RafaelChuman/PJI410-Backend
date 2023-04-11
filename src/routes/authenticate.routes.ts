import { Router } from "express"
import { authenticaUserUseCase }  from "@src/modules/users";

const authenticateRoutes = Router();


authenticateRoutes.post("/", (request, response) => 
    authenticaUserUseCase.execute(request, response)
);

export {authenticateRoutes};