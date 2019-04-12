import mongoose, { Schema, model } from "mongoose";

export interface Marcas extends mongoose.Document { 
    identificador: number,
    nombre: string
}

const MarcasSchema = new Schema({
    identificador: Number,
    nombre: String
});

export default model<Marcas>('Marcas', MarcasSchema);