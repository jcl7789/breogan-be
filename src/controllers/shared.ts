import { Request, Response } from 'express';

export const ACTIVE = 1;
export const INACTIVE = 0;

export const sendErrorResponse = (error: any, res: Response) => {
    res.json({ code: -1, message: 'Error en la consulta.', 'object': error.message });
}

export const sendErrorMessageResponse = (error: any, res: Response, msg: string) => {
    res.json({ code: -1, message: msg, 'object': error.message });
}

class Controller {

    constructor() { }

    public sinImplementar(req: Request, res: Response) { 
        res.status(501).send();
    }

    public rechazar(req: Request, res: Response) { 
        res.status(405).send();
    }
    
}

export const defaultController = new Controller();