import mongoose, { Schema, model } from "mongoose";

export interface Unidades extends mongoose.Document { 
    identificador: number,
    medida: string
}

const UnidadesSchema = new Schema({
    identificador: {
        type: Number,
        required: true,
        lowercase: true
    },
    medida: {
        type: String,
        required: true,
        lowercase: true
    }
});

export default model<Unidades>('Unidades', UnidadesSchema);
