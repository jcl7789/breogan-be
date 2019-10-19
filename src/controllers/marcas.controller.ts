import { Response, Request } from 'express';

import MarcasModel, { Marcas } from '../models/Marca';
import { INACTIVE, sendErrorResponse, ACTIVE } from './shared';

class Controller {

    constructor() { }
    
    public async agregarMarca(req: Request, res: Response) {
        try {
            const { identificador, nombre } = req.body;
            const response = await new MarcasModel({
                identificador: identificador,
                nombre: nombre,
                activo: ACTIVE
            }).save({
                validateBeforeSave: true
            });
            res.send(response);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }

    public activarMarca(req: Request, res: Response) {
        const { id } = req.params;
        const brand: Marcas = new MarcasModel({
            _id: id,
            activo: ACTIVE
        })
        MarcasModel.updateOne({ _id: id }, brand)
            .then((response) => {
                res.json({
                    code: 1,
                    object: response,
                    message: "Marca activada"
                });
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Uso interno unicamente
    public quitarMarca(req: Request, res: Response) { 
        const id  = req.params.id;
        MarcasModel.findByIdAndDelete(id)
        .then((response) => {
            res.json({ code: 1, object: response, message: "Marca removida" });
        }).catch((error) => {
                sendErrorResponse(error, res);
        });
    }

    public desactivarMarca(req: Request, res: Response) {
        const { id } = req.params;
        const brand: Marcas = new MarcasModel({
            _id: id,
            activo: INACTIVE
        })
        MarcasModel.updateOne({ _id: id }, brand)
        .then((response) => {
            res.json({ code: 1, object: response, message: "Marca desactivada" });
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    public modificarMarca(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre } = req.body;
        const brand: Marcas = new MarcasModel({ nombre: nombre, _id: id });
        MarcasModel.updateOne({ _id: id }, brand)
        .then((response) => {
            res.json({
                code: 1,
                object: response,
                message: "Unidad modificada"
            });    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    public obtenerMarcas(req: Request, res: Response) {
        MarcasModel.find()
            .then((marcas) => {
                if (marcas.length > 0) {
                    res.status(200).json({marcas});
                } else {
                    res.status(204).send();
                }
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
    
    public obtenerMarca(req: Request, res: Response) {
        const id = req.params.id;
        MarcasModel.findOne({ _id: id })
            .then((marca) => {
                if (!marca) {
                    res.status(204).send();
                } else {
                    res.status(200).json({marcas: marca});
                }
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
}

export const brandsController = new Controller();