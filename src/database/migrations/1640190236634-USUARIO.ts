import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class USUARIO1640190236634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'USUARIO',
            columns: [
                {
                    name: "CD_USUARIO",
                    type: "int",
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true, //true significa que é gerada automaticamente a coluna
                    generationStrategy: 'increment' //auto-increment
                },
                {
                    name: 'NOME',
                    type: 'varchar'
                },
                {
                    name: 'EMAIL',
                    type: 'varchar(32)',
                    isNullable: true
                },
                {
                    name: 'PRESENCA',
                    type: 'boolean'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('USUARIO')
    }

}
