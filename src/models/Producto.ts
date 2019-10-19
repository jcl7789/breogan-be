import mongoose, { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";
import uniqueValidator from "mongoose-unique-validator";

export interface Productos extends mongoose.Document {
    _id: ObjectID,
    codigo: number,
    categoria: string,
    marca: string,
    nombre: string,
    presentacion: string,
    unidadPresentacion: number,
    stock: number,
    precio: number,
    fechaUltimoMovimiento: Date,
    vigente: boolean
}

const ProductosSchema = new Schema({
    codigo: { type: Number, required: true, unique: true },
    categoria: String,
    marca: String,
    nombre: String,
    presentacion: Number,
    unidadPresentacion: Number,
    stock: Number,
    precio: Number,
    fechaUltimoMovimiento: Date,
    vigente: Boolean
});

ProductosSchema.plugin(uniqueValidator);

export default model<Productos>('Productos', ProductosSchema);