import { Schema, model } from 'mongoose';

const StudentSchema = new Schema({
  nombres: { type: String, required: true, minlength: 2 },
  apellidos: { type: String, required: true, minlength: 2 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: { type: String, required: true, minlength: 6 },
  unidadesCreditoAprobadas: { type: Number, default: 0, min: 0 },
  unidadesCreditoTotales: { type: Number, required: true, min: 1 },
  periodoActivo: {
    type: String,
    enum: ['2024-1', '2024-2', '2025-1', '2025-2'],
    required: true
  },
  enrollmentYear: { type: Number, min: 2000, max: 2100 },
  courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
}, { timestamps: true });

export default model('Student', StudentSchema);
