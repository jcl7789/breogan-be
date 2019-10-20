import mongoose, { Schema, model } from "mongoose";
import { ObjectID } from "mongodb";
import uniqueValidator from "mongoose-unique-validator";

export interface Producto extends mongoose.Document {
    _id: ObjectID,
    codigo: number,
    categoria: string,
    subcategoria: string,
    marca: string,
    nombre: string,
    presentacion: string,
    unidadPresentacion: string,
    stock: number,
    precio: number,
    fechaUltimoMovimiento: Date,
    activo: boolean
}

const ProductoSchema = new Schema({
    codigo: { type: Number, required: true, unique: true },
    categoria: String,
    subcategoria: String,
    marca: String,
    nombre: String,
    presentacion: Number,
    unidadPresentacion: String,
    stock: Number,
    precio: Number,
    fechaUltimoMovimiento: Date,
    activo: Boolean
});

ProductoSchema.plugin(uniqueValidator);

export default model<Producto>('Producto', ProductoSchema);