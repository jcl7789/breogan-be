import mongoose, { Schema, model } from "mongoose";
import DireccionModel, { Direccion } from "./Direccion";
import TelefonoModel, { Telefono } from "./Telefono";
import MascotaModel, { Mascota } from "./Mascota";

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
}

const ClienteSchema = new Schema({
  numeroDni: Number,
  tipoDni: Number,
  nombre: String,
  apellido: String,
  genero: String,
  condicionFiscal: String,
  direccion: DireccionModel,
  mascotas: [MascotaModel],
  telefonos: [TelefonoModel],
  fecNac: String
});

export default model<Cliente>("Cliente", ClienteSchema);
