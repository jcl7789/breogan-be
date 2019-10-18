import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";

export interface Unidades extends mongoose.Document {
    _id: ObjectID,
    medida: string
}

const UnidadesSchema = new Schema({
    medida: { type: String, required: true, unique: true }
}).plugin(uniqueValidator);

export default model<Unidades>('Unidades', UnidadesSchema);
