import { Request, Response } from "express";
import {Blog} from '../models/Blog';


export const blog = async (req: Request, res: Response) => {
   
    const blogs = await Blog.findAll();
  
    let title: string = 'BLOG - ICON'
    let blog: boolean = true;
    res.render('pages/blog', 
       {blog, title, blogs}
    );
};