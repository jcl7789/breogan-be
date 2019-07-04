import mongoose, { Schema, model } from "mongoose";

export interface Categorias extends mongoose.Document { 
    identificador: number,
    nombre: string
}

const CategoriasSchema = new Schema({
    identificador: Number,
    nombre: String
});

export default model<Categorias>('Categorias', CategoriasSchema);