import { Response, Request } from 'express';

import VentaModel, { Venta } from '../models/Venta';
import { sendErrorResponse, ResponseData } from './shared';
import moment = require('moment-timezone');

class Controller {

    constructor() { }

    // Create
    public registrarVenta(req: Request, res: Response) {
        try {
            const requestData: Venta = req.body;

            if (requestData.detalle.length === 0) {
                sendErrorResponse({}, res, "No se han seleccionado productos");
                return;
            }

            // Agrego la fecha si no viene
            if (!requestData.fecha) {
                console.log('No vino la fecha');
                Object.assign(requestData, {
                    "fecha": moment().toDate()
                });
            } else {
                console.log('Vino la fecha');
            }

            // 
            new VentaModel(requestData).save({ validateBeforeSave: true })
                .then((response) => {
                    res.status(200).send(new ResponseData(response, "Venta agregada"));
                })
                .catch((error) => {
                    sendErrorResponse(error, res, 'Error al registrar la venta. Reintente.');
                });
        } catch (error) {
            sendErrorResponse(error, res);
        }
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
        VentaModel.updateOne({ _id: id }, modifiedData)
            .then((result) => {
                if (result.n && result.n > 0) {
                    res.send(new ResponseData(result, "Venta modificada"));
                } else {
                    res.status(204).send();
                }
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Delete
    public cancelarVenta(req: Request, res: Response) {
        const id = req.params.id;
        VentaModel.findByIdAndDelete({ _id: id })
            .then((result) => {
                if (result) {
                    res.status(200).send(new ResponseData(result, "Venta cancelada"));
                } else {
                    res.status(204).send();
                }
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }
}

export const salesController = new Controller();