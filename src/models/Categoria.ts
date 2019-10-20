import mongoose, { Schema, model } from "mongoose";
import { ObjectID } from "bson";
import uniqueValidator from "mongoose-unique-validator";

export interface Categoria extends mongoose.Document { 
    _id: ObjectID,
    nombre: string,
    subcategorias: string[]
}

const CategoriaSchema = new Schema({
    nombre: { type: String, required: true, unique: true },
    subcategorias: [String]
}).plugin(uniqueValidator);

export default model<Categoria>('Categoria', CategoriaSchema);