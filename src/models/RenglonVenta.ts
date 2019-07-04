import mongoose, { Schema, model } from "mongoose";

export interface RenglonVenta extends mongoose.Document { 
    identificador: number,
    medida: string
}

const RenglonVentaSchema = new Schema({
    id: Number,
    cod_producto: Number,
    cantidad: Number,
    subtotal: Number
});

export default model<RenglonVenta>('RenglonVenta', RenglonVentaSchema);