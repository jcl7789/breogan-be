import VentasModel, { Ventas } from './../models/Ventas';
import RenglonVentaModel, { RenglonVenta } from './../models/RenglonVenta';
import { Response, Request } from 'express';

class Controller {
    constructor() {}
    // Create
    public async registrarVenta(req: Request, res: Response){
        try {

        } catch (error) {
            console.log(error);
        }
    }
    // Read
    public async obtenerTodasLasVentas(req: Request, res: Response){
        
    }
    // Update
    public async modificarVenta(req: Request, res: Response){}
    // Delete
    public async cancelarVenta(req: Request, res: Response){}
}

export const ventasController = new Controller();