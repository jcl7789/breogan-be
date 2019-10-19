import mongoose, { Schema, model } from "mongoose";

export interface Marca extends mongoose.Document { 
    nombre: string,
    activo: number
}

const MarcaSchema = new Schema({
    nombre: { type: String, required: true },
    activo: { type: Number, required: true }
});

export default model<Marca>('Marca', MarcaSchema);