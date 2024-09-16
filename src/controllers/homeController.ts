import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function create(){
   const blog =  await prisma.blog.create({
        data:{
            imagem: 'images-empresa.jpg',
            titulo:'Como desenvolver uma política de comunicação na empresa?',
            descricao:'A política de inclusão das organizações tem o objetivo de promover a diversidade e inclusão dentro das empresas. Saiba mais!',
            data: '11/09/2024'
        }
      });
      console.log(blog);
}

export const Home = async (req: Request, res: Response) =>{
  //create();    
    let title: string = 'Home - ICON';
    let home: boolean = true;
    let contato: boolean = false;

    res.render('pages/home',[title, home, contato]);
}
    