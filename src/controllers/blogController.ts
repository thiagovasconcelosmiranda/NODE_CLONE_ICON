import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../database/pg";


export const blog = async (req: Request, res: Response) => {
    res.render('pages/blog');
};

export const blogPag = async (req: Request, res: Response) => {
    
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

    const totalPage = Math.ceil(total / take)
    
    return res.json({ blog: blog, total:total, totalPage: totalPage});

};

