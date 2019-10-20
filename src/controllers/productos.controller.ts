import { Response, Request } from 'express';
import moment = require('moment-timezone');

import { sendErrorResponse, INACTIVE, ACTIVE } from './shared'
import ProductoModel, { Producto } from '../models/Producto';
import { ObjectID } from 'bson';


class Controller {
    
    constructor() { }

    // Create
    public agregarProducto(req: Request, res: Response) { 
        const data: Producto = req.body;
        Object.assign(data, { 'fechaUltimoMovimiento': moment().format()});
        new ProductoModel(data).save().then((response) => {
            res.status(200).json({code: 1, message: "Agregado"});
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Read
    public obtenerProducto(req: Request, res: Response) {
        const id = req.params.id;
        ProductoModel.findOne({_id: id})
        .then( (product) => {
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
            if (result.length > 0){
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
            res.json({
                code: 1,
                object: response,
                message: "Producto modificado"
            });    
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
            res.json({
                code: 1,
                object: response,
                message: "Producto desactivado"
            });    
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
            res.json({
                code: 1,
                object: response,
                message: "Producto activado"
            });    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }
}

export const productsController = new Controller();