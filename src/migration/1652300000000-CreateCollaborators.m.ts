import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateCollaborators1652300000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
                {
                    name:"Collaborators",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "name",
                            type: "varchar",
                        },
                        {
                            name: "cep",
                            type: "varchar",
                        },
                        {
                            name: "numberAddress",
                            type: "varchar",
                        },     
                        {
                            name: "cellphone",
                            type: "varchar",
                        }, 
                        {
                            name: "whatsApp",
                            type: "varchar",
                        },                                                            
                        {
                            name: "createdAt",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                })
        );

        await queryRunner.createIndex(
            "Collaborators",
            new TableIndex({
                name: "IDX_COLLABORATORS_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropIndex("Collaborators", "IDX_COLLABORATORS_NAME");
        
        await queryRunner.dropTable("Collaborators");

    }


}
