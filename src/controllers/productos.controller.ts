import { Response, Request } from 'express';
import moment = require('moment-timezone');

import { sendErrorResponse, INACTIVE, ACTIVE, ResponseData } from './shared'
import ProductoModel, { Producto } from '../models/Producto';
import { ObjectID } from 'bson';


class Controller {

    constructor() { }

    // Create
    public agregarProducto(req: Request, res: Response) {
        const data: Producto = req.body;
        Object.assign(data, { 'fechaUltimoMovimiento': moment().format() });
        new ProductoModel(data).save().then((response) => {
            res.status(200).send(new ResponseData(response, "Producto agregado"));
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Read
    public obtenerProducto(req: Request, res: Response) {
        const id = req.params.id;
        ProductoModel.findOne({ _id: id })
            .then((product) => {
                if (!product) {
                    return res.status(204).send();
                } else {
                    res.status(200).send(product);
                }
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Read all
    public obtenerProductos(req: Request, res: Response) {
        ProductoModel.find()
            .then((result) => {
                if (result.length > 0) {
                    res.status(200).send(result);
                } else {
                    res.status(204).send()
                }
            })
            .catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Update
    public modificarProducto(req: Request, res: Response) {
        const id = req.params.id;
        const modifiedData: Producto = req.body;
        Object.assign(modifiedData, {
            'fechaUltimoMovimiento': moment().format(),
            '_id': id
        });
        ProductoModel.updateOne({ _id: id }, modifiedData)
            .then((response) => {
                if (response.n && response.n !== 0) {
                    const message = response.nModified && response.nModified !== 0 ? 'Producto modificado' : 'Sin cambios';
                    res.json({
                        code: response.ok,
                        object: response,
                        message: message
                    });
                } else {
                    res.status(204).send();
                }
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Delete (Deactivate)
    // No se borra el producto, se lo desactiva
    public borrarProducto(req: Request, res: Response) {
        const id = req.params.id;
        const data = Object.assign({}, {
            'activo': INACTIVE,
            'fechaUltimoMovimiento': moment().format()
        })
        ProductoModel.updateOne({ _id: id }, data)
            .then((response) => {
                if (response.n && response.n !== 0) {
                    const message = response.nModified && response.nModified !== 0 ? 'Producto desactivado' : 'Sin cambios';
                    res.status(200).json({
                        code: response.ok,
                        object: response,
                        message: message
                    });
                } else {
                    res.status(204).send();
                }
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    // Reagregar (Reactivate)
    public activarProducto(req: Request, res: Response) {
        const id = req.params.id;
        const data = Object.assign({}, {
            'activo': ACTIVE,
            'fechaUltimoMovimiento': moment().format()
        })
        ProductoModel.updateOne({ _id: id }, data)
            .then((response) => {
                if (response.n && response.n !== 0) {
                    const message = response.nModified && response.nModified !== 0 ? 'Producto activado' : 'Sin cambios';
                    res.status(200).json({
                        code: response.ok,
                        object: response,
                        message: message
                    });
                } else {
                    res.status(204).send();
                }
            }).catch((error) => {
                sendErrorResponse(error, res);
            });
    }

    public actualizarStock(req: Request, res: Response) {
        const id = req.params.id;
        const { unidades } = req.body;
        ProductoModel.findOne({ _id: id }).then((producto) => {
            if (producto) {
                const data = Object.assign({}, {
                    stock: producto.stock - unidades
                });
                ProductoModel.updateOne({ _id: id }, data)
                    .then((response) => {
                        if (response.n && response.n !== 0) {
                            const message = response.nModified && response.nModified !== 0 ? 'Stock actualizado' : 'Sin cambios';
                            res.status(200).json({
                                code: response.ok,
                                object: response,
                                message: message
                            });
                        } else {
                            res.status(204).send();
                        }
                    }).catch((error) => {
                        sendErrorResponse(error, res);
                    });
            }
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
}

export const productsController = new Controller();