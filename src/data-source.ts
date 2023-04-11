import { Users } from "@src/entity/Users/Users";
import { DataSource, createConnections, getConnectionManager } from "typeorm";
import { Activities } from "@src/entity/Activities/activities";
import { Collaborators } from "./entity/Collaborators/collaborators";
import { Zones } from "./entity/Zones/zones";
import { LubrificationSystemServices } from "./entity/LubricationSystemServices/lubrificationSystemServices";
import { ERs } from "./entity/ERs/ERs";

export const PostgresDS = new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5432,
    username: "chuman",
    password: "pji410_univesp!",
    database: "postgres",
    name: "default",
    entities: [Users, Collaborators, Activities, Zones, ERs, LubrificationSystemServices],
    migrations: ["./src/migration/*.m.ts"],

})

PostgresDS.initialize()
    .then(() => {

        console.log(PostgresDS.options.migrations)
        console.log(PostgresDS.migrations.length)

        console.log("Database Initialized");
    })
    .catch((error: string) => console.log(error))






