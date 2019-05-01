import { Response, Request } from 'express';

import CategoriasModel, { Categorias } from './../models/Categorias';
import MarcasModel, { Marcas } from './../models/Marcas';
import VentasModel, { Ventas } from './../models/Ventas';
import RenglonVentaModel, { RenglonVenta } from './../models/RenglonVenta';
import UnidadesModel, { Unidades } from './../models/Unidades';
import ProductosModel, { Productos } from './../models/Productos';

class Controller { 

    // Unidades
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

    // Marcas
    public async agregarMarcas(req: Request, res: Response) { 
        const { identificador, nombre } = req.body();
        const marca: Marcas = new MarcasModel({ identificador, nombre })
        await marca.save();
        res.send("Marca agregada");
    }

    public async quitarMarcas(req: Request, res: Response) { 
        const { identificador, nombre } = req.body();
        const marca: Marcas = new MarcasModel({ identificador, nombre })
        await marca.remove(marca._id);
        res.send("Marca removida");
    }

    public async modificarMarcas(req: Request, res: Response) { 
        const { identificador, nombre } = req.body();
        const marca: Marcas = new MarcasModel({ identificador, nombre })
        await marca.update(marca._id);
        res.send("Marca modificada");
    }
}

export const controller = new Controller();

/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */