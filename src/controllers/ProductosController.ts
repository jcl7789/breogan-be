import ProductosModel, { Productos } from './../models/Productos';
import { Response, Request } from 'express';

class Controller {
    
    constructor() { }

    // Create
    public agregarProducto(req: Request, res: Response) { 
        const data: Productos = req.body;
        new ProductosModel(data).save().then((response) => {
            res.status(200).json({code: 1, message: "Agregado"});
        }).catch((error) => {
            res.status(500).json({code:-1, message: "Error", error: error});
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
            res.status(500).send({code: -1, message: "Error"});
        });
    }
    
    // Read all
    public async obtenerListaProducto(req: Request, res: Response) { 
        ProductosModel.find()
        .then((result) => {
            if (result.length > 0){
                res.status(200).send(result);
            } else {
                res.status(204).send()
            }
        })
        .catch((error) => {
            res.status(500).send({code: -1, message: "Error"});
        });
    }

    // Update
    public async modificarProducto(req: Request, res: Response) {
        const id = req.params.id; 
        res.status(200).send({code: 1, message: "Ok", object: id});
    }

    // Delete (Deactivate)
    // No se borra el producto, se lo desactiva
    public async borrarProducto(req: Request, res: Response) {
        const id = req.params.id;
        res.status(200).send({code: 1, message: "Ok", object: id});
    }

}

export const productsController = new Controller();