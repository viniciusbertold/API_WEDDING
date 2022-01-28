"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const USUARIO_1 = __importDefault(require("../entities/USUARIO"));
function userRep() {
    return (0, typeorm_1.getRepository)(USUARIO_1.default);
}
exports.default = {
    async cd_user(req, res, next) {
        const { EMAIL } = req.params;
        const existeEmail = await userRep().findOne({ EMAIL });
        if (existeEmail) {
            req.id_usuario = existeEmail.CD_USUARIO;
            return next();
        }
        else {
            req.id_usuario = 0;
            return next();
        }
    }
};
//# sourceMappingURL=middle.js.map