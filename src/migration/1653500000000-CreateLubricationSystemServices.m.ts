import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableIndex,
} from "typeorm";

export class CreateLubricationSystemServices1653500000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const newLubricationSystemServiceTableOptions = {
      name: "LubricationSystemServices",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
        },
        {
          name: "createdAt",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "add",
          type: "integer",
        },
        {
          name: "obs",
          type: "varchar",
        },
        {
          name: "activityId",
          type: "uuid",
        },
        {
          name: "collaboratorId",
          type: "uuid",
        },
        {
          name: "erId",
          type: "uuid",
        },
      ],
    };

    const newLubricationSystemServiceTable = new Table(
      newLubricationSystemServiceTableOptions
    );

    await queryRunner.createTable(newLubricationSystemServiceTable);



    await queryRunner.createForeignKey(
      "LubricationSystemServices",
      new TableForeignKey({
        name: "FK_LUBRICATIONSYSTEMSERVICES_COLLABORATORS",
        columnNames: ["collaboratorId"],
        referencedColumnNames: ["id"],
        referencedTableName: "Collaborators",
        onDelete: "CASCADE",
      })
    );

    await queryRunner.createForeignKey(
        "LubricationSystemServices",
        new TableForeignKey({
          name: "FK_LUBRICATIONSYSTEMSERVICES_ACTIVITIES",
          columnNames: ["activityId"],
          referencedColumnNames: ["id"],
          referencedTableName: "Activities",
          onDelete: "CASCADE",
        })
      );

      await queryRunner.createForeignKey(
        "LubricationSystemServices",
        new TableForeignKey({
          name: "FK_LUBRICATIONSYSTEMSERVICES_ERS",
          columnNames: ["erId"],
          referencedColumnNames: ["id"],
          referencedTableName: "ERs",
          onDelete: "CASCADE",
        })
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "LubricationSystemServices",
      "FK_LUBRICATIONSYSTEMSERVICES_COLLABORATORS"
    );

    await queryRunner.dropForeignKey(
        "LubricationSystemServices",
        "FK_LUBRICATIONSYSTEMSERVICES_ACTIVITIES"
      );



    await queryRunner.dropIndex(
      "LubricationSystemServices",
      "FK_LUBRICATIONSYSTEMSERVICES_ERS"
    );

    await queryRunner.dropTable("LubricationSystemServices");
  }
}
