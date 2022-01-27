import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('USUARIO')
export default class Usuario {
    @PrimaryGeneratedColumn('increment')
    CD_USUARIO: number;

    @Column()
    NOME: string;

    @Column()
    EMAIL: string;

    @Column()
    PRESENCA: boolean;

}