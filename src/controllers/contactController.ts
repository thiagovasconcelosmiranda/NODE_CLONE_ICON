import { Request, Response } from "express";
import validator from 'validator';
import {Contato} from '../models/Contato';


export const getContact = async ( req: Request, res:Response) => {
  let title: string = 'Contato - ICON';
   res.render('pages/contact', {title});
}

export const AddContact = async (req: Request, res: Response) => {
    let contact: boolean = true;
    let {name, email, phone, perg1, perg2, perg3, perg4, description} = req.body;
     
   if(name && email 
     && phone && perg1
     && perg2 && perg3
     && perg4 && description){

         const contact = await Contato.create({
            name, email, phone, perg1, perg2, perg3, perg4, description
         });

         if(contact){
            res.render('pages/contact');
         }
   }

}
