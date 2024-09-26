import { Request, Response } from "express";
import validator from 'validator';
import { PrismaClient } from "@prisma/client";


export const getContact = async (req: Request, res: Response) => {
   let title: string = 'Contato - ICON';
   res.render('pages/contact', { title });
}

export const AddContact = async (req: Request, res: Response) => {
   let prisma = new PrismaClient();
   let title = 'home';
   let flash = '';

   let { name, email, phone, perg1, perg2, perg3, perg4, communication, description } = req.body;
  
   if(name && email && phone &&
      perg1 && perg2 && perg3 && perg4
   ){
      let desc = description ? description : 'vazio';
      let com = communication ? communication : 'vazio';

      
     let contato = await prisma.contato.create({
        data:{
         name: name,
         email: email,
         fone: phone,
         perg1: perg1,
         perg2: perg2,
         perg3: perg3,
         perg4: perg4,
         comunicacao: communication,
         descricao: description
        }
      });

      if(contato){
          flash = 'Adicionado com sucesso!';
      }
   }
   res.render('pages/home',[title, flash]);
}
