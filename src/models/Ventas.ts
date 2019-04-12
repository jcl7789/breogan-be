import mongoose, { Schema, model } from "mongoose";
import { RenglonVenta } from "./RenglonVenta";

export interface Ventas extends mongoose.Document { 
    identificador: number,
    medida: string
}

const VentasSchema = new Schema({
    numero_factura: Number,
    tipo_factura: String,
    fecha: Date,
    total: Number,
    detalle: Array<RenglonVenta>()
});

export default model<Ventas>('Ventas', VentasSchema);