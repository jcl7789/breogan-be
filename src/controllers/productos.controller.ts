import ProductosModel, { Productos } from '../models/Producto';
import { Response, Request } from 'express';
import { sendErrorResponse, INACTIVE, ACTIVE } from './shared'

class Controller {
    
    constructor() { }

    // Create
    public agregarProducto(req: Request, res: Response) { 
        const data: Productos = req.body;
        new ProductosModel(data).save().then((response) => {
            res.status(200).json({code: 1, message: "Agregado"});
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Read
    public obtenerProducto(req: Request, res: Response) {
        const id = req.params.id;
        ProductosModel.findOne({_id: id})
        .then( (product) => {
            if (!product) {
                return res.status(204).send();
            } else {
                res.status(200).json({productos: product});
            }
        })
        .catch((error) => {
            sendErrorResponse(error, res);
        });
    }
    
    // Read all
    public obtenerProductos(req: Request, res: Response) { 
        ProductosModel.find()
        .then((result) => {
            if (result.length > 0){
                res.status(200).json({productos: result});
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
        const modifiedData: Productos = req.body;
        modifiedData._id = id;
        ProductosModel.updateOne({ _id: id }, modifiedData)
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
        ProductosModel.updateOne({ _id: id }, {activo: INACTIVE})
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
        ProductosModel.updateOne({ _id: id }, {activo: ACTIVE})
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