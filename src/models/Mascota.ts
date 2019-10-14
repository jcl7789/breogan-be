import mongoose, { Schema, model } from "mongoose";

export interface Mascota extends mongoose.Document {
  identificador: number;
  nombre: string;
  especie: string;
  raza: string;
  fec_nac: string;
  color: string;
  activo: number;
}

const MascotaSchema = new Schema({
  identificador: Number,
  nombre: String,
  especie: String,
  raza: String,
  fec_nac: String,
  color: String,
  activo: Number
});

export default model<Mascota>("Mascota", MascotaSchema);
