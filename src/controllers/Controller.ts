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

    public async quitarUnidades(req: Request, res: Response) {
        try {
            const { identificador, medida } = req.body;
            const medidas: Unidades = new UnidadesModel({ identificador, medida })
            await medidas.remove(medidas._id);
            res.send("Unidad removida");
        } catch (error) {

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
            const { identificador, medida } = req.body;
            const medidas: Unidades = new UnidadesModel({ identificador, medida })
            await medidas.update(medidas._id);
            res.send("Unidad modificada");
        } catch (error) {

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
        const { identificador, nombre } = req.body;
        const activo = this.ACTIVE;
        const marca: Marcas = new MarcasModel({ identificador, nombre, activo })
        await marca.save();
        res.send("Marca agregada");
    }

    public async quitarMarcas(req: Request, res: Response) {
        const { identificador, nombre } = req.body;
        const activo = this.INACTIVE;
        const marca: Marcas = new MarcasModel({ identificador, nombre, activo })
        await marca.update(marca._id);
        res.send("Marca removida");
    }

    public async modificarMarcas(req: Request, res: Response) {
        const { identificador, nombre, activo } = req.body;
        const marca: Marcas = new MarcasModel({ identificador, nombre, activo })
        await marca.update(marca._id);
        res.send("Marca modificada");
    }

    public async obtenerMarcas(req: Request, res: Response) {

    }
}

export const controller = new Controller();

/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */