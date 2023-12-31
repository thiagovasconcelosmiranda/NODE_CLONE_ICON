import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mustache from 'mustache-express';
import route from './routes/route';
import {error} from './controllers/404Controller';
import {sequelize} from './database/pg';

const server = express();
dotenv.config();

server.use(route);

try{
   sequelize.authenticate();
}catch(error){
   console.log("Erro ao conectar: ", error);
}

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));
server.use(error);
server.listen(process.env.PORT);