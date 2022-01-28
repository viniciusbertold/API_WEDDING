"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USUARIO1640190236634 = void 0;
const typeorm_1 = require("typeorm");
class USUARIO1640190236634 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'USUARIO',
            columns: [
                {
                    name: "CD_USUARIO",
                    type: "int",
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('USUARIO');
    }
}
exports.USUARIO1640190236634 = USUARIO1640190236634;
//# sourceMappingURL=1640190236634-USUARIO.js.map