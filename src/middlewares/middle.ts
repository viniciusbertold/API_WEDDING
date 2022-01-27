import {Request, Response, NextFunction} from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../entities/USUARIO';

function userRep(){
    return getRepository(Usuario)
}

export default {
    async cd_user(req: Request, res: Response, next: NextFunction){
        const {EMAIL} = req.params;
        const existeEmail = await userRep().findOne({EMAIL})

        if(existeEmail){
            req.id_usuario = existeEmail.CD_USUARIO;
            return next()
        }else{
            req.id_usuario = 0;
            return next()
        }
    }
}