import { Response, Request } from 'express';

class Controller { 

    index (req: Request, res: Response) {
        res.json({ title: 'Welcome to Breogan'});
    }

}

export const controller = new Controller();


/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */