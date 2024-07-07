import { Request, Response } from "express";
import { Blog } from '../models/Blog';


export const blog = async (req: Request, res: Response) => {
    res.render('pages/blog');
};

export const blogPag = async (req: Request, res: Response) => {
    let { pag } = req.params;
    const limit = Number(3);
    const offset = 0 + (Number(pag) - 1) * limit;
    const countBlogs = await Blog.findAndCountAll();

    const blogs = await Blog.findAll({
        limit: limit,
        offset: offset
    });

    return res.json({ blog: blogs, limit: limit, countBlog: countBlogs.count });

};

