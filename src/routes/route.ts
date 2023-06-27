import { Router } from "express";
import * as HomeController from '../controllers/homeController';
import * as ContactController from '../controllers/contactController';
import * as BlogController from '../controllers/blogController';
import * as SobreController from '../controllers/sobreController';
import bodyParser from 'body-parser';
import * as FaqController from '../controllers/faqController';
import * as PrivacyController from '../controllers/privacyController';

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const route = Router();
route.get('/', HomeController.Home);

route.get('/contato', ContactController.getContact);
route.post('/contato', urlencodedParser , ContactController.AddContact);
route.get('/blog', BlogController.blog);
route.get('/sobre', SobreController.sobre);
route.get("/faq", FaqController.faq);
route.get("/privacidade", PrivacyController.privacy);

export default route;