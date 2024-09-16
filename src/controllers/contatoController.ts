import { Request, Response } from "express";
import validator from 'validator';


export const getContato = async (req: Request, res:Response) => {
  let title: string = 'Contato - ICON';
  let contato: boolean = true;
    res.render('pages/contato', {title, contato});
}/*

export const AddContato = async (req: Request, res:Response) => {
    let contato: boolean = true;
    let {nome, email, cell, item1, item2, item3, home} = req.body;
   
    let error = {
         nome: false as boolean,
        email: false as boolean,
         cell: false as boolean,
        item1: false as boolean,
        item2: false as boolean,
        item3: false as boolean,
    };
    let errorMsg: boolean = false;
    let errorEnv: boolean = false;
  
    (nome ? error.nome = false : error.nome = true);
    (email ? error.email = false : error.email = true);
    (cell ? error.cell = false : error.cell = true);
    (item1 ? error.item1 = false : error.item1 = true);
    (item2 ? error.item2 = false : error.item2 =true);
    (item3 ? error.item3 = false : error.item3 = true);

   if(!error.nome && !error.email 
     && !error.cell && !error.item1 
     && !error.item2 && !error.item3){
         const contato = await Contato.create({
            nome, email, cell, item1, item2, item3
         });

         if(contato){
            errorEnv = true;
            res.render('pages/contato', {error, errorEnv, contato});
         }
   }else{
        errorMsg = true;
        res.render('pages/contato', {error, errorMsg, contato,  nome, email, cell, item1, item2, item3});  
   }
   
   

}
   */