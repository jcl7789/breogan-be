import mongoose, { Schema, model } from "mongoose";

export interface Productos extends mongoose.Document { 
    identificador: number,
    medida: string
}

const ProductosSchema = new Schema({
    codigo: Number,
    categoria: Number,
    marca: Number,
    nombre: String,
    presentacion: Number,
    unidadPresentacion: Number,
    stock: Number,
    precio: Number,
    fechaUltimoMovimiento: Date
});

export default model<Productos>('Productos', ProductosSchema);