import mongoose, { Schema, model } from "mongoose";

export interface Marcas extends mongoose.Document { 
    nombre: string,
    activo: number
}

const MarcasSchema = new Schema({
    nombre: { type: String, required: true },
    activo: { type: Number, required: true }
});

export default model<Marcas>('Marcas', MarcasSchema);