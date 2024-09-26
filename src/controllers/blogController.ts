import { Request, Response } from "express";
import { prisma } from "../database/pg";


async function create(){
    await prisma.blog.create({
        data:{
            imagem: 'images-empresa.jpg',
            titulo:'Como desenvolver uma política de comunicação na empresa?',
            descricao:'A política de inclusão das organizações tem o objetivo de promover a diversidade e inclusão dentro das empresas. Saiba mais!',
            data: '11/09/2024'
        }
      });
}

export const blog = async (req: Request, res: Response) => {
    res.render('pages/blog');
};

export const blogPag = async (req: Request, res: Response) => {
    //create();

   if(req.params.namePage === 'Blog'){
    pagTotal(req, res);
   }else{
    pag(req, res);
   }
};

const pag =  async (req: Request, res: Response) => {
    const skip = Number(req?.params?.pag) || 0;
    const take = 3;
    const [blog, total]  = await prisma.$transaction([
        prisma.blog.findMany({
           select:{
            id: true,
            imagem: true,
            titulo: true,
            descricao: true,
            data: true
           },
           skip, take
        }),

        prisma.blog.count()
    ]);

    const totalPage = Math.ceil(total / take);
    return res.json({ blog: blog, total:total, totalPage: totalPage});
}

const pagTotal = async (req: Request, res: Response) =>{
   const blog = await prisma.blog.findMany();
   return res.json({blog: blog});
}

