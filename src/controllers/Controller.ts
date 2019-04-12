import { Response, Request } from 'express';
import UnidadesModel, { Unidades } from "../models/Unidades";


class Controller { 
    public async agregarUnidades(req: Request, res: Response) { 
        const { identificador, medidas } = req.body();
        const medida: Unidades = new UnidadesModel({ identificador, medidas })
        await medida.save();
        res.send("Unidad agregada");
    }

    public async quitarUnidades(req: Request, res: Response) { 
        const { identificador, medidas } = req.body();
        const medida: Unidades = new UnidadesModel({ identificador, medidas })
        await medida.remove(medida._id);
        res.send("Unidad removida");
    }

    public async modificarUnidades(req: Request, res: Response) { 
        const { identificador, medidas } = req.body();
        const medida: Unidades = new UnidadesModel({ identificador, medidas })
        await medida.update(medida._id);
        res.send("Unidad modificada");
    }
}

export const controller = new Controller();


/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */