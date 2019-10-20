import { Response, Request } from 'express';

import MarcaModel, { Marca } from '../models/Marca';
import { INACTIVE, sendErrorResponse, ACTIVE, ResponseData } from './shared';

class Controller {

    constructor() { }
    
    public async agregarMarca(req: Request, res: Response) {
        try {
            const { identificador, nombre } = req.body;
            const response = await new MarcaModel({
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
        const brand: Marca = new MarcaModel({
            _id: id,
            activo: ACTIVE
        })
        MarcaModel.updateOne({ _id: id }, brand)
            .then((response) => {
                res.send(new ResponseData(response, "Marca activada"));
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Uso interno unicamente
    public quitarMarca(req: Request, res: Response) { 
        const id  = req.params.id;
        MarcaModel.findByIdAndDelete(id)
        .then((response) => {
            res.send( new ResponseData(Object(response), "Marca removida"));
        }).catch((error) => {
                sendErrorResponse(error, res);
        });
    }

    public desactivarMarca(req: Request, res: Response) {
        const { id } = req.params;
        const brand: Marca = new MarcaModel({
            _id: id,
            activo: INACTIVE
        })
        MarcaModel.updateOne({ _id: id }, brand)
        .then((response) => {
            res.send( new ResponseData(response, "Marca desactivada"));
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    public modificarMarca(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre } = req.body;
        const brand: Marca = new MarcaModel({ nombre: nombre, _id: id });
        MarcaModel.updateOne({ _id: id }, brand)
        .then((response) => {
            res.send(new ResponseData(response, "Marca modificada"));    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    public obtenerMarcas(req: Request, res: Response) {
        MarcaModel.find()
            .then((marcas) => {
                if (marcas.length > 0) {
                    res.status(200).send(marcas);
                } else {
                    res.status(204).send();
                }
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
    
    public obtenerMarca(req: Request, res: Response) {
        const id = req.params.id;
        MarcaModel.findOne({ _id: id })
            .then((marca) => {
                if (marca) {
                    res.status(200).send(marca);
                } else {
                    res.status(204).send();
                }
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
}

export const brandsController = new Controller();