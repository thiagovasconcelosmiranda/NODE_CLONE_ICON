import { Request, Response } from "express";
import { Blog } from "../models/Blog";

export const sobre = async (req: Request, res: Response) => {
    const blogs = await Blog.findAll();
    let title: string = 'SOBRE - ICON';
    let sobre: boolean = true;
    res.render('pages/sobre', {title, sobre, blogs});
};
