import mongoose, { Schema, model } from "mongoose";

export interface Marcas extends mongoose.Document { 
    identificador: number,
    nombre: string,
    activo: number
}

const MarcasSchema = new Schema({
    identificador: Number,
    nombre: String,
    activo: Number
});

export default model<Marcas>('Marcas', MarcasSchema);