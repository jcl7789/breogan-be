import mongoose, { Schema, model } from "mongoose";

export interface Categoria extends mongoose.Document { 
    identificador: number,
    nombre: string
}

const CategoriaSchema = new Schema({
    identificador: Number,
    nombre: String
});

export default model<Categoria>('Categoria', CategoriaSchema);