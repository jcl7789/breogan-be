import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";

export interface Usuario extends mongoose.Document {
  email: string;
  password: string;
  _id: ObjectID;
  activo: boolean;
  numClie: string;
}

const UsuarioSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  activo: Boolean,
  numClie: { type: String, unique: true }
});

UsuarioSchema.plugin(uniqueValidator);

export default model<Usuario>("Usuario", UsuarioSchema);
