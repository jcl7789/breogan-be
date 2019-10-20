import { Request, Response } from 'express';

export const ACTIVE = 1;
export const INACTIVE = 0;

export const sendErrorResponse = (error: any, res: Response, msg?: string) => {
    if (!msg) {
        msg = 'Hubo un error en la consulta';
    }
    try {
        const values = error.errors ? Object.values<any>(error.errors) : [{ 'kind': 'null', 'path': 'Object' }];
        res.json({
            'code': -1,
            'result': 'fail',
            'message': msg,
            'error': {
                'kind': values[0].kind,
                'path': values[0].path,
                'message': error.message
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
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