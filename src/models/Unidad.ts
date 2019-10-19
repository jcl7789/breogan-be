import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";

export interface Unidad extends mongoose.Document {
    _id: ObjectID,
    medida: string
}

const UnidadSchema = new Schema({
    medida: { type: String, required: true, unique: true }
}).plugin(uniqueValidator);

export default model<Unidad>('Unidad', UnidadSchema);
