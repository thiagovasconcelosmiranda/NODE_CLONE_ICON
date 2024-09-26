import { Request, Response } from "express";

export const Home = async (req: Request, res: Response) =>{
    let title: string = 'Home - ICON';
    let home: boolean = true;
    let contato: boolean = false;

    res.render('pages/home',[title, home, contato]);
}
    