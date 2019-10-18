import VentasModel, { Ventas } from '../models/Ventas';
import { RenglonVenta } from '../models/RenglonVenta';
import { Response, Request } from 'express';

class Controller {
    constructor() {}
    // Create
    public registrarVenta(req: Request, res: Response){
    }
    // Read
    public obtenerTodasLasVentas(req: Request, res: Response){
        
    }
    // Update
    public modificarVenta(req: Request, res: Response){}
    // Delete
    public cancelarVenta(req: Request, res: Response){}
}

export const ventasController = new Controller();