import { Response, Request } from 'express';

import CategoriasModel, { Categorias } from './../models/Categorias';
import MarcasModel, { Marcas } from './../models/Marcas';
import VentasModel, { Ventas } from './../models/Ventas';
import RenglonVentaModel, { RenglonVenta } from './../models/RenglonVenta';
import UnidadesModel, { Unidades } from './../models/Unidades';
import ProductosModel, { Productos } from './../models/Productos';

class Controller {
    ACTIVE = 1;
    INACTIVE = 0;

    constructor() {
            
        }


    // Unidades
    public async agregarUnidades(req: Request, res: Response) {
        try {
            const { identificador, medida } = req.body;
            const medidas: Unidades = new UnidadesModel({ identificador, medida })
            await medidas.save();
            res.send("Unidad agregada");
        } catch (error) {
            console.log(error);
        }
    }

    public async removerUnidades(req: Request, res: Response) {
        try {
            const { id } = req.params;
            console.log(id);
            await UnidadesModel.findByIdAndDelete(id);
            res.send("Unidad removida");
        } catch (error) {

        }
    }

    public async modificarUnidades(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { identificador, medida } = req.body;
            const unit: Unidades = new UnidadesModel({ identificador, medida });
            unit._id = id;
            const response = await unit.update(unit);
            console.log(response);
            res.send(response);
        } catch (error) {
            console.log(error)
        }
    }

    public async consultarUnidades(req: Request, res: Response) {
        try {
            const unidades = await UnidadesModel.find();
            res.json(unidades);
        } catch (error) {

        }
    }

    // Marcas
    public async agregarMarcas(req: Request, res: Response) {
        try {
            const { identificador, nombre } = req.body;
            const activo = 1;
            const response = await new MarcasModel({ identificador, nombre, activo }).save({validateBeforeSave: true});
            res.send(response);    
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async quitarMarcas(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const activo = 0;
            const response = await MarcasModel.find(elem => { return elem == id }).update({ activo });
            res.send(response);
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async modificarMarcas(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { identificador, nombre, activo } = req.body;
            const brand: Marcas = new MarcasModel({ identificador, nombre, activo });
            brand._id = id;
            const response = await brand.update(brand);
            res.send(response);
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async obtenerMarcas(req: Request, res: Response) {
        try {
            const marcas = await MarcasModel.find();
            res.json(marcas);
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    // Categorias
    public async agregarCategorias(req: Request, res: Response) {
        try {
            const { identificador, nombre } = req.body;
            const categorias: Categorias = new CategoriasModel({ identificador, nombre });
            await categorias.save();
            res.send("Categoria agregada");
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async removerCategorias(req: Request, res: Response) {
        try {
            const { id } = req.params;
            console.log(id);
            await CategoriasModel.findByIdAndDelete(id);
            res.send("Categoria removida");
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async modificarCategorias(req: Request, res: Response) {
        try {
            const { identificador, nombre } = req.body;
            const categorias: Categorias = new CategoriasModel({ identificador, nombre });
            await categorias.update(categorias._id);
            res.send("Categoria modificada");
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }

    public async consultarCategorias(req: Request, res: Response) {
        try {
            const categorias = await CategoriasModel.find();
            res.json(categorias);
        } catch (error) {
            console.log(error);
            res.send('Error en la consulta.');
        }
    }
}

export const controller = new Controller();

/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */