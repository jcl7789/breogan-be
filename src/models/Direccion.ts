import mongoose, { Schema, model } from "mongoose";

export interface Direccion extends mongoose.Document {
  identificador: number;
  calle: string;
  numero: number;
  piso: string;
  departamento: string;
  codigoPostal: string;
  localidad: string;
  barrio: string;
  manzana: string;
  lote: string;
  provincia: string;
  pais: string;
}

const DireccionSchema = new Schema({
  identificador: Number,
  calle: String,
  numero: Number,
  piso: String,
  departamento: String,
  codigoPostal: String,
  localidad: String,
  barrio: String,
  manzana: String,
  lote: String,
  provincia: String,
  pais: String
});

export default model<Direccion>("Direccion", DireccionSchema);
