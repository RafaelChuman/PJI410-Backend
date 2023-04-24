import express, { NextFunction, Request, Response } from "express";
import cors from 'cors';

import { AppError } from "@errors/AppError";
import "express-async-errors";

import { usersRoutes } from "@routes/users.routes";
import { zonesRoutes } from "@src/routes/zones.routes";
import { authenticateRoutes } from "@routes/authenticate.routes";
import { activitiesRoutes } from "@src/routes/activities.routes";
import { lubrificationSystemServicesRoutes } from "./routes/lubricationSystemService.routes";
import { ensureAuthenticated } from "./midlewares/ensureAuthenticated";
import { collaboratorsRoutes } from "./routes/collaborators.routes";
import { ersRoutes } from "./routes/ers.routes";
import { oilMonitorRoutes } from "./routes/oilMonitor.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(authenticateRoutes);

app.use("/users", usersRoutes);

app.use("/oilMonitor", oilMonitorRoutes);

app.use(ensureAuthenticated);

//Midleware para validar a autenticação de todas as rotas seguintes
app.use("/collaborators", collaboratorsRoutes);

app.use("/zones", zonesRoutes);

app.use("/activities", activitiesRoutes);

app.use("/lubrificationSystems", lubrificationSystemServicesRoutes);

app.use("/ers", ersRoutes);



app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {

        // response.setHeader("Access-Control-Allow-Origin", "*");
        // response.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");

        // response.header("Access-Control-Allow-Origin", "*");
        // response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
        // response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ message: err.message });
        }

        return response.status(500).json({
            status: "Error",
            message: `Internal Server Errorr - ${err.message}`,
        });
    }
);



export default app;