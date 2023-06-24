import { Router } from "express";
import * as HomeController from '../controllers/homeController';
import * as ContatoController from '../controllers/contatoController';
import * as BlogController from '../controllers/blogController';
import * as SobreController from '../controllers/sobreController';
import bodyParser from 'body-parser';
import * as FaqController from '../controllers/faqController';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const route = Router();
route.get('/', HomeController.Home);

route.get('/contato', ContatoController.getContato);
route.post('/contato/:id', ContatoController.getContato);
route.post('/contato', urlencodedParser ,ContatoController.AddContato);
route.get('/blog', BlogController.blog);
route.get('/sobre', SobreController.sobre);
route.get("/faq", FaqController.faq);

export default route;