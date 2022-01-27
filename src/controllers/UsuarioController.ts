import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Usuario from '../entities/USUARIO';

function UsuarioRep(){
    return getRepository(Usuario);
}

export default {
    async create(req: Request, res: Response){
        const {NOME,
        EMAIL,
        PRESENCA} = req.body

        
        const existeEmail = await UsuarioRep().findOne({EMAIL})
        if(!existeEmail){
            const createUser = UsuarioRep().create({
                NOME,
                EMAIL,
                PRESENCA
            })
            const createdUser = await UsuarioRep().save(createUser)
            return res.status(201).json(createdUser)
        }else{
            return res.status(409).json({MENSAGEM: 'EMAIL JA INSERIDO'})
        }

        

    },
    async show(req: Request, res: Response){
        const usuario = await UsuarioRep().find()
        return res.status(200).json(usuario) 
    },
    async update(req: Request, res: Response){
        const existeEmail = await UsuarioRep().findOne({CD_USUARIO:req.id_usuario})
        if(existeEmail){
            await UsuarioRep().update(req.id_usuario, {PRESENCA: !(existeEmail.PRESENCA)})
            return res.status(200).json({MENSAGEM: 'ALTERADO PARA ' + !(existeEmail.PRESENCA)})
        }else{
            return res.status(404).json({MENSAGEM: 'EMAIL NÃO ENCONTRADO'})
        }
       


    }
}