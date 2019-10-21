import mongoose, { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

import { Direccion } from "./Direccion";
import { Telefono } from "./Telefono";
import { Mascota } from "./Mascota";

export interface Cliente extends mongoose.Document {
  numeroDni: number;
  tipoDni: number;
  nombre: string;
  apellido: string;
  genero: string;
  condicionFiscal: string;
  direccion: Direccion;
  telefonos: Telefono[];
  mascotas: Mascota[];
  fecNac: string;
  user_id: string;
}

const ClienteSchema = new Schema({
  numeroDni: { type: Number, required: true, unique: true },
  tipoDni: Number,
  nombre: String,
  apellido: String,
  genero: String,
  condicionFiscal: String,
  direccion: Object,
  mascotas: [Object],
  telefonos: [Object],
  fecNac: String,
  user_id: { type: String, required: true, unique: true }
}).plugin(uniqueValidator);

export default model<Cliente>("Cliente", ClienteSchema);
