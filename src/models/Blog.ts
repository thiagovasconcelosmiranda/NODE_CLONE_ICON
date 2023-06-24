import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../database/pg';

export interface BlogInterface extends Model{
   id: number,
   title: string,
   data: string,
   descrition: string,
   image: string
}

export const Blog = sequelize.define<BlogInterface>('Blog',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    title:{
       type: DataTypes.STRING
    },

    data:{
        type: DataTypes.STRING 
    },

    descrition:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    }
},{
    tableName: 'blog',
    timestamps: false
});


