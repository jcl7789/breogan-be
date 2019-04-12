import mongoose, { Schema, model } from "mongoose";

export interface Unidades extends mongoose.Document { 
    identificador: number,
    medida: string
}

const UnidadesSchema = new Schema({
    identificador: Number,
    medida: String
});

export default model<Unidades>('Unidades', UnidadesSchema);
