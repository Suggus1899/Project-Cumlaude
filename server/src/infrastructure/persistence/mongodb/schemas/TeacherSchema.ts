import { Schema, model } from 'mongoose';

const TeacherSchema = new Schema({
  name: { type: String, required: true, minlength: 2 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: { type: String, required: true, minlength: 6 },
  materiasAsignadas: [{
    nombre: { type: String, required: true },
    puntuacion: { type: Number, min: 1, max: 10, default: 1 }
  }],
  department: { type: String },
}, { timestamps: true });

export default model('Teacher', TeacherSchema);
