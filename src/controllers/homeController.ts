import { Request, Response } from "express";
import { Blog } from "../models/Blog";



export const Home = async (req: Request, res: Response) =>{
    
    const blogs = await Blog.findAll();
    let title: string = 'Home - ICON';
    let home: boolean = true;
    let contato: boolean = false;
    res.render('pages/home', {title, home, blogs, contato});
}