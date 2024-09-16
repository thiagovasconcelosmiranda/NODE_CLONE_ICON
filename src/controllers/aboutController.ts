import { Request, Response } from "express";

export const about = async (req: Request, res: Response) => {
    let title: string = 'SOBRE - ICON';
    let sobre: boolean = true;
    res.render('pages/about', {title, sobre});
};
