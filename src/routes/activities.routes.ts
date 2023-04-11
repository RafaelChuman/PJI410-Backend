import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";
import {
  createActivity,
  deleteActivity,
  listActivities,
  updateActivity,
} from "@src/modules/activities";
import { Router } from "express";

const activitiesRoutes = Router();

activitiesRoutes.post("/", ensureIsAdmin, (request, response) =>
  createActivity.handle(request, response)
);

activitiesRoutes.get("/", (request, response) =>
  listActivities.handle(request, response)
);

activitiesRoutes.delete("/", (request, response) =>
  deleteActivity.execute(request, response)
);


activitiesRoutes.put("/", (request, response) =>
  updateActivity.execute(request, response)
);



export { activitiesRoutes };
