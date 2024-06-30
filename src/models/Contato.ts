import { Model, DataTypes } from "sequelize";
import {sequelize} from '../database/pg'

export interface ContatoInterface extends Model{
       id: number,
     nome: string,
    email: string,
    phone: string,
    perg1: string,
    perg2: string,
    perg3: string,
    perg4: string,
    description: string
}

export const Contato = sequelize.define<ContatoInterface>('Contato', {
   id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
   },
   nome:{
    type: DataTypes.STRING
   },
   email:{
    type: DataTypes.STRING
   },
   phone:{
    type: DataTypes.STRING
   },
   perg1:{
    type: DataTypes.STRING
   },
   perg2:{
    type: DataTypes.STRING
   },
   perg3:{
    type: DataTypes.STRING
   },
   perg4:{
    type: DataTypes.STRING
   },
   description:{
     type: DataTypes.STRING
   }
},{
    tableName: 'contato',
    timestamps: false
   });