import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";

import { RenglonVenta } from "./RenglonVenta";


export interface Venta extends mongoose.Document { 
    _id: ObjectID,
    numero_factura: number,
    tipo_factura: string,
    fecha: Date,
    client_name: string,
    total: number,
    detalle: RenglonVenta[]
}

const VentaSchema = new Schema({
    numero_factura: { type: Number, required: true, unique: true },
    tipo_factura: { type: String, required: true },
    fecha: { type: Date, required: true },
    client_name: { type: String, required: true },
    total: { type: Number, required: true },
    detalle: { type: Array<RenglonVenta>(), required: true }
});

VentaSchema.plugin(uniqueValidator);

export default model<Venta>('Venta', VentaSchema);