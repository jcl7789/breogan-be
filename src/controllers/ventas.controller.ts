import { Response, Request } from 'express';

import VentasModel, { Ventas } from '../models/Venta';
import { sendErrorResponse } from './shared';

class Controller {

    constructor() { }

    // Create
    public registrarVenta(req: Request, res: Response) {
    }

    // Read all
    public obtenerVentas(req: Request, res: Response) {
        VentasModel.find()
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
            VentasModel.findOne({ _id: id })
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
        const modifiedData: Ventas = req.body;
        modifiedData._id = id;
        VentasModel.updateOne({ _id: id }, modifiedData)
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