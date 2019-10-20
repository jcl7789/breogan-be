import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { ObjectID } from "bson";
import { isEmail } from "validator";

export interface Usuario extends mongoose.Document {
  email: string;
  password: string;
  _id: ObjectID;
  activo: boolean;
  numClie: string;
  tipo: number;
}

const UsuarioSchema = new Schema({
  email: { type: String, required: true, unique: true, validate: [isEmail, 'notEmail'] },
  password: { type: String, required: true },
  tipo: { type: Number, required: true },
  activo: Boolean,
  numClie: { type: String, unique: true }
});

UsuarioSchema.plugin(uniqueValidator);

export default model<Usuario>("Usuario", UsuarioSchema);
