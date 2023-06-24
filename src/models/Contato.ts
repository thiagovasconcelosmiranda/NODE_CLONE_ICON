import { Model, DataTypes } from "sequelize";
import {sequelize} from '../database/pg'

export interface ContatoInterface extends Model{
       id: number,
     nome: string,
    email: string,
     cell: string,
    item1: string,
    item2: string,
    item3: string
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
   cell:{
    type: DataTypes.STRING
   },
   item1:{
    type: DataTypes.STRING
   },
   item2:{
    type: DataTypes.STRING
   },
   item3:{
    type: DataTypes.STRING
   }
},{
    tableName: 'contato',
    timestamps: false
   });