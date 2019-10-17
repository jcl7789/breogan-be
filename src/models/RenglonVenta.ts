import mongoose, { Schema, model } from "mongoose";
import { ObjectID } from "bson";

export interface RenglonVenta extends mongoose.Document { 
    _id: ObjectID,
    cod_producto: number,
    cantidad: string,
    subtotal: Date,
}

const RenglonVentaSchema = new Schema({
    cod_producto: Number,
    cantidad: Number,
    subtotal: Number
});

export default model<RenglonVenta>('RenglonVenta', RenglonVentaSchema);