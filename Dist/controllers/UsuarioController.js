"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const USUARIO_1 = __importDefault(require("../entities/USUARIO"));
function UsuarioRep() {
    return (0, typeorm_1.getRepository)(USUARIO_1.default);
}
exports.default = {
    async create(req, res) {
        const { NOME, EMAIL, PRESENCA } = req.body;
        const existeEmail = await UsuarioRep().findOne({ EMAIL });
        if (!existeEmail) {
            const createUser = UsuarioRep().create({
                NOME,
                EMAIL,
                PRESENCA
            });
            const createdUser = await UsuarioRep().save(createUser);
            return res.status(201).json(createdUser);
        }
        else {
            return res.status(409).json({ MENSAGEM: 'EMAIL JA INSERIDO' });
        }
    },
    async show(req, res) {
        const usuario = await UsuarioRep().find();
        return res.status(200).json(usuario);
    },
    async update(req, res) {
        const existeEmail = await UsuarioRep().findOne({ CD_USUARIO: req.id_usuario });
        if (existeEmail) {
            await UsuarioRep().update(req.id_usuario, { PRESENCA: !(existeEmail.PRESENCA) });
            return res.status(200).json({ MENSAGEM: 'ALTERADO PARA ' + !(existeEmail.PRESENCA) });
        }
        else {
            return res.status(404).json({ MENSAGEM: 'EMAIL NÃO ENCONTRADO' });
        }
    }
};
//# sourceMappingURL=UsuarioController.js.map