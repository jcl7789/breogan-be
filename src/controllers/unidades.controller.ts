import { Response, Request } from 'express';

import UnidadesModel, { Unidades } from '../models/Unidades';
import { INACTIVE, sendErrorResponse } from './constants';

class Controller {

    constructor() {}

    // Unidades
    public agregarUnidades(req: Request, res: Response) {
        const { medida } = req.body;
        const medidas: Unidades = new UnidadesModel({
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

    public removerUnidades(req: Request, res: Response) {
        const { id }  = req.params;
        UnidadesModel.findByIdAndDelete(id)
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

    public modificarUnidades(req: Request, res: Response) {
        const { id } = req.params;
        const { medida } = req.body;
        const unit: Unidades = new UnidadesModel({
            _id: id,
            medida: String(medida).toUpperCase()
        })
        UnidadesModel.updateOne({ _id: id }, unit)
            .then((response) => {
                const fueModificado = response.nModified
                if (fueModificado !== 0) {
                    res.json({
                        code: fueModificado,
                        object: response,
                        message: "Unidad modificada"
                    });
                } else {
                    res.status(204).json({
                        code: fueModificado,
                        object: response,
                        message: "Sin cambios"
                    })
                }

            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    public async consultarUnidades(req: Request, res: Response) {
        try {
            const unidades = await UnidadesModel.find();
            res.json(unidades);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }

    public async consultarUnidad(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const unidades = await UnidadesModel.findOne({
                _id: id
            });
            res.json(unidades);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
}

export const controller = new Controller();

/**
 * response.render() -> devuelve un HTML
 * response.send() -> envia datos
 * response.json() -> JS Object
 */