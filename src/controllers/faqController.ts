import { Request, Response } from "express";

export const faq = async (req: Request, res: Response) => {
    const title: string = 'FAQ - ICON'
    let faq: boolean = true;
    res.render('pages/faq', {faq, title});
};