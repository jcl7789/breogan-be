import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";

import { RenglonVenta } from "./RenglonVenta";


export interface Ventas extends mongoose.Document { 
    _id: ObjectID,
    numero_factura: number,
    tipo_factura: string,
    fecha: Date,
    client_name: string,
    total: number,
    detalle: RenglonVenta[]
}

const VentasSchema = new Schema({
    numero_factura: { type: Number, required: true, unique: true },
    tipo_factura: String,
    fecha: Date,
    client_name: String,
    total: Number,
    detalle: Array<RenglonVenta>()
});

VentasSchema.plugin(uniqueValidator);

export default model<Ventas>('Ventas', VentasSchema);