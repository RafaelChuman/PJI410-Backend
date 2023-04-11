import { MigrationInterface, QueryRunner, Table, TableIndex, TableOptions } from "typeorm"

export class CreateZones1653100000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const newZonesTableOptions:TableOptions = {
            name:"Zones",
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


        await queryRunner.createTable(new Table(newZonesTableOptions));

        await queryRunner.createIndex(
            "Zones",
            new TableIndex({
                name: "IDX_ZONES_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropIndex("Zones", "IDX_ZONES_NAME");

        await queryRunner.dropTable("Zones");
    }

}
