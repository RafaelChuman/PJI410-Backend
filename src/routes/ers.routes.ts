import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createER, deleteERs, listERs } from "@src/modules/ERs";
import { request, Request, Response, Router } from "express";


const ersRoutes = Router();

ersRoutes.post("/", ensureIsAdmin, (request, response) => 
    createER.execute(request, response)
);

ersRoutes.delete("/", (request, response) => 
    deleteERs.execute(request, response)
);

ersRoutes.get("/", (request, response) => 
    listERs.execute(request, response)
);

export {ersRoutes};