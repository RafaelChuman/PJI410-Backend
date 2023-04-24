import { createOilMonitor, deleteOilMonitor, listOilMonitor } from "@src/modules/oilMonitor";
import { Router, request, response } from "express";

const oilMonitorRoutes = Router();

oilMonitorRoutes.get("/", (request, response) => listOilMonitor.execute(request, response));

oilMonitorRoutes.post("/", (request, response) => createOilMonitor.execute(request, response));

oilMonitorRoutes.delete("/", (request, response) => deleteOilMonitor.execute(request, response));

export { oilMonitorRoutes };

