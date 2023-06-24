import { Request, Response } from "express";

export const faq = async (req: Request, res: Response) => {
    let faq: boolean = true;
    res.render('pages/faq', {faq});
};