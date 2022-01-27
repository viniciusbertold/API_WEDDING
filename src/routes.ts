import { Router} from 'express'
import UsuarioController from "./controllers/UsuarioController";

import middle from './middlewares/middle';

const routes = Router()

routes.get('/usuarios', UsuarioController.show);
routes.post('/usuarios', UsuarioController.create);
routes.put('/usuarios/:EMAIL', middle.cd_user, UsuarioController.update);

export default routes;