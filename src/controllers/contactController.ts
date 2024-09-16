import { Request, Response } from "express";
import validator from 'validator';
import { PrismaClient } from "@prisma/client";


export const getContact = async (req: Request, res: Response) => {
   let title: string = 'Contato - ICON';
   res.render('pages/contact', { title });
}

export const AddContact = async (req: Request, res: Response) => {
   let { name, email, phone, perg1, perg2, perg3, perg4, description } = req.body;

   if (name && email
      && phone && perg1
      && perg2 && perg3
      && perg4) {
         console.log(req.body);
         
      /*
      if(contact){
         res.render('pages/contact');
      }
      */

   }
}
