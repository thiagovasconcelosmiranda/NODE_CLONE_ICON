import { Request, Response } from "express";

export const privacy = async (req: Request, res: Response) => {
    let title: string = 'PRIVACIDADE - ICON';
    let privacy: boolean = true;
    res.render('pages/privacy', {title, privacy});
};