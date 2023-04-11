import request from 'supertest';
import express from 'express';
import { usersRoutes } from "@src/routes/users.routes";
import bodyParser from 'body-parser';
import { Server, IncomingMessage, ServerResponse } from "http";
import { PostgresDS } from '@src/data-source';


let serverHocked: Server<typeof IncomingMessage, typeof ServerResponse>
let app: express.Express;

describe("Unit Test from User", () => {

    beforeAll(async () => {
        await PostgresDS.initialize();

        app = express();
        app.use("/users", usersRoutes);

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        let PORT = 5000;
        serverHocked = app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`));
    });

    afterAll(async () => {
        await PostgresDS.destroy();

        serverHocked.close();
    })

    it("Should get a List of Users", async () => {

        const response = await request(serverHocked).get('/users');

        console.log(response.body);

        expect(response.status).toBe(201);
    })
})
