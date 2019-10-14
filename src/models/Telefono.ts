import mongoose, { Schema, model } from "mongoose";

export interface Telefono extends mongoose.Document {
  nombre: string;
  activo: number;
}

const TelefonoSchema = new Schema({
  identificador: Number,
  nombre: String,
  especie: String,
  raza: String,
  fec_nac: Date,
  color: String,
  activo: Number
});

export default model<Telefono>("Telefono", TelefonoSchema);
