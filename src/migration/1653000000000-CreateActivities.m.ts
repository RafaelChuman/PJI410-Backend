import { MigrationInterface, QueryRunner, Table, TableIndex, TableOptions } from "typeorm"

export class CreateActivities1653000000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const newActivitiesTableOptions:TableOptions = {
            name:"Activities",
            columns:[
                {
                    name:"id",
                    type:"uuid",
                    isPrimary: true,
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name:"name",
                    type:"varchar",
                    isNullable: false,
                    isUnique: true,
                    length:"20",
                },
                {
                    name:"createdAt",
                    type:"timestamp",
                    isNullable: false,
                    default:"now()",
                },
            ]
        };


        await queryRunner.createTable(new Table(newActivitiesTableOptions));

        await queryRunner.createIndex(
            "Activities",
            new TableIndex({
                name: "IDX_ACTIVITIES_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropIndex("Activities", "IDX_ZONES_NAME");

        await queryRunner.dropTable("Activities");
    }

}
