import { Response, Request } from 'express';

import { sendErrorResponse, sendErrorMessageResponse } from './constants.controller';
import ClienteModel, { Cliente } from '../models/Cliente';


class Controller { 
    
    constructor() { }
    
    // Create
    public nuevoCliente(req: Request, res: Response) { 
        const data: Cliente = req.body;
        new ClienteModel(data).save().then((response) => {
            res.status(200).json({code: 1, message: "Agregado", object: response});
        }).catch((error) => {
            if (error.errors) {
                if (error.errors.numeroDni) {
                    return sendErrorMessageResponse(error, res, 'Ya existe ese cliente');
                }
            } else {
                sendErrorResponse(error, res);
            }
        });
    }

    // Read
    public obtenerCliente(req: Request, res: Response) { 
        const id = req.params.id;
        ClienteModel.findOne({user_id: id})
        .then( (client) => {
            if (!client) {
                return res.status(204).send();
            } else {
                res.status(200).send(client);
            }
        })
        .catch((error) => {
            sendErrorResponse(error, res);
        });
    }

    // Read All
    public obtenerClientes(req: Request, res: Response) { 
        ClienteModel.find()
        .then((result) => {
            if (result.length > 0){
                res.status(200).json({clientes: result});
            } else {
                res.status(204).send()
            }
        })
            .catch((error) => {
                sendErrorResponse(error, res);
        });
    }

    // Update
    public modificarCliente(req: Request, res: Response) { 
        const id = req.params.id;
        const modifiedData: Cliente = req.body;
        ClienteModel.updateOne({ user_id: id }, modifiedData)
        .then((response) => {
            res.json({
                code: 1,
                object: response,
                message: "Cliente modificado"
            });    
        }).catch((error) => {
            sendErrorResponse(error, res);
        });
    }

}

export const clientes_controller = new Controller();