import { Response, Request } from 'express';

import VentaModel, { Venta } from '../models/Venta';
import { sendErrorResponse } from './shared';
import { ObjectID } from 'bson';

class Controller {

    constructor() { }

    // Create
    public registrarVenta(req: Request, res: Response) {
    }

    // Read all
    public obtenerVentas(req: Request, res: Response) {
        VentaModel.find()
            .then((ventas) => {
                if (ventas.length > 0) {
                    res.status(200).send(ventas);
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
                .then((venta) => {
                    if (venta) {
                        res.status(200).send(venta);
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
        VentaModel.updateOne({_id: id}, modifiedData)
        .then((result) => {
            res.json({
                code: 1,
                object: result,
                message: "Producto modificado"
            });    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Delete
    public cancelarVenta(req: Request, res: Response) {
        const id = req.params.id;
        VentaModel.findByIdAndDelete({_id: id})
            .then((result) => {
                res.json({
                    code: 1,
                    object: result,
                    message: "Producto eliminado"
                }); 
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }
}

export const salesController = new Controller();