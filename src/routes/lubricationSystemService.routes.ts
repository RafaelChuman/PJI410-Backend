import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import { createLubricationSystemService, deleteLubricationSystemService, listLubricationSystemServices } from "@src/modules/lubricationSystemServices";
import { request, Request, Response, Router } from "express";


const lubrificationSystemServicesRoutes = Router();

lubrificationSystemServicesRoutes.post("/", ensureIsAdmin, (request, response) => 
    createLubricationSystemService.execute(request, response)
);

lubrificationSystemServicesRoutes.get("/", (request, response) => 
    listLubricationSystemServices.execute(request, response)
);

lubrificationSystemServicesRoutes.delete("/", (request, response) => 
    deleteLubricationSystemService.execute(request, response)
);

export {lubrificationSystemServicesRoutes};