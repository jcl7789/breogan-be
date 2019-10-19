import { Response, Request } from 'express';

import VentaModel, { Venta } from '../models/Venta';
import { sendErrorResponse } from './shared';

class Controller {

    constructor() { }

    // Create
    public registrarVenta(req: Request, res: Response) {
    }

    // Read all
    public obtenerVentas(req: Request, res: Response) {
        VentaModel.find()
            .then((result) => {
                if (result.length > 0) {
                    res.status(200).json({ ventas: result });
                } else {
                    res.status(204).send();
                }
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Read
    public obtenerVenta(req: Request, res: Response) {
        const id = req.params.id;
        try {
            VentaModel.findOne({ _id: id })
                .then((result) => {
                    if (result) {
                        res.status(200).json({ ventas: result });
                    } else {
                        res.status(204).send();
                    }
                })
                .catch((error) => {
                    sendErrorResponse(error, res);
                });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }

    // Update
    public modificarVenta(req: Request, res: Response) {
        const id = req.params.id;
        const modifiedData: Venta = req.body;
        modifiedData._id = id;
        VentaModel.updateOne({ _id: id }, modifiedData)
        .then((response) => {
            res.json({
                code: 1,
                object: response,
                message: "Producto modificado"
            });    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Delete
    public cancelarVenta(req: Request, res: Response) {
        const id = req.params.id;
    }
}

export const salesController = new Controller();