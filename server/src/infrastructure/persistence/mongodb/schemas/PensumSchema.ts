import mongoose, { Schema, Document } from 'mongoose';

export interface IMateria extends Document {
  codigo: string;
  nombre: string;
  horasTeoricas: number;
  horasPracticas: number;
  horasSemanales: number;
  unidadesCredito: number;
  prelaciones: string[];
}

export interface ISemestre extends Document {
  numero: number;
  materias: IMateria[];
}

export interface IPensum extends Document {
  pensumId: number;
  carrera: string;
  semestres: ISemestre[];
}

const MateriaSchema = new Schema<IMateria>({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  horasTeoricas: { type: Number, required: true },
  horasPracticas: { type: Number, required: true },
  horasSemanales: { type: Number, required: true },
  unidadesCredito: { type: Number, required: true },
  prelaciones: [{ type: String }]
});

const SemestreSchema = new Schema<ISemestre>({
  numero: { type: Number, required: true },
  materias: [MateriaSchema]
});

const PensumSchema = new Schema<IPensum>({
  pensumId: { type: Number, required: true, unique: true },
  carrera: { type: String, required: true },
  semestres: [SemestreSchema]
});

export default mongoose.model<IPensum>('Pensum', PensumSchema);
