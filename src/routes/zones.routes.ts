import { Router } from "express";
import { ensureAuthenticated } from "@midlewares/ensureAuthenticated";
import multer from "multer";
import { uploadFile } from "@config/fileManager";
import {
  createZoneUseCase,
  deleteZoneUseCase,
  listZoneUseCase,
  updateZoneUseCase,
} from "@src/modules/zones";
import { ensureIsAdmin } from "@src/midlewares/ensureIsAdmin";

const zonesRoutes = Router();

const uploadPhoto = multer(uploadFile("./tmp/Zones"));

zonesRoutes.post("/", ensureIsAdmin, (request, response) =>
  createZoneUseCase.execute(request, response)
);

zonesRoutes.get("/", (request, response) =>
  listZoneUseCase.execute(request, response)
);

zonesRoutes.delete("/", (request, response) =>
  deleteZoneUseCase.execute(request, response)
);

zonesRoutes.put("/", (request, response) =>
  updateZoneUseCase.execute(request, response)
);

// zonesRoutes.patch("/", uploadPhoto.single("Zones"), ensureAuthenticated,
//   (request, response) =>
//   uploadZonesController().handle(request, response));

export { zonesRoutes };
