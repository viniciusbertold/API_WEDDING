"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = __importDefault(require("./controllers/UsuarioController"));
const middle_1 = __importDefault(require("./middlewares/middle"));
const routes = (0, express_1.Router)();
routes.get('/usuarios', UsuarioController_1.default.show);
routes.post('/usuarios', UsuarioController_1.default.create);
routes.put('/usuarios/:EMAIL', middle_1.default.cd_user, UsuarioController_1.default.update);
exports.default = routes;
//# sourceMappingURL=routes.js.map