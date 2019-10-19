import { Response, Request } from 'express';

import UnidadModel, { Unidad } from '../models/Unidad';
import { sendErrorResponse } from './shared';

class Controller {

    constructor() {}

    // Unidad
    public agregarUnidad(req: Request, res: Response) {
        const { medida } = req.body;
        const medidas: Unidad = new UnidadModel({
            medida: String(medida).toUpperCase()
        });
        medidas.save()
            .then((response) => {
                res.json({
                    code: 1,
                    object: response,
                    message: "Unidad agregada"
                });
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            })
    }

    public removerUnidad(req: Request, res: Response) {
        const { id }  = req.params;
        UnidadModel.findByIdAndDelete(id)
            .then((response) => {
                res.json({
                    code: 1,
                    object: response,
                    message: "Unidad removida"
                })
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    public modificarUnidad(req: Request, res: Response) {
        const { id } = req.params;
        const { medida } = req.body;
        const unit: Unidad = new UnidadModel({
            _id: id,
            medida: String(medida).toUpperCase()
        })
        UnidadModel.updateOne({ _id: id }, unit)
            .then((response) => {
                const fueModificado = response.nModified
                if (fueModificado !== 0) {
                    res.json({
                        code: fueModificado,
                        object: response,
                        message: "Unidad modificada"
                    });
                } else {
                    res.status(204);
                }
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    public async consultarUnidades(req: Request, res: Response) {
        try {
            const unidades = await UnidadModel.find();
            res.send(unidades);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }

    public async consultarUnidad(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const unidades = await UnidadModel.findOne({
                _id: id
            });
            res.send(unidades);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
}

export const unitsController = new Controller();

/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */