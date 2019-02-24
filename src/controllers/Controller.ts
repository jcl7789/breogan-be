import { Response, Request } from 'express';
import UnidadesModel, { Unidades } from "../models/Unidades";


class Controller { 

    index (req: Request, res: Response) {
        res.json({ title: 'Welcome to Breogan'});
    }

    public async agregarUnidades(req: Request, res: Response) { 
        const { identificador, medidas } = req.body();
        const medida: Unidades = new UnidadesModel({ identificador, medidas })
        await medida.save();
        res.send("Se envio");
    }


}

export const controller = new Controller();


/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */