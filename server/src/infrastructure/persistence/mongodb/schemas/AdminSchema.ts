import { Schema, model } from 'mongoose';

const AdminSchema = new Schema({
  name: { type: String, required: true, minlength: 2 },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: { type: String, required: true, minlength: 6 },
  permissions: [{
    type: String,
    enum: ['manage_users', 'manage_courses', 'view_reports', 'edit_settings']
  }],
}, { timestamps: true });

export default model('Admin', AdminSchema);
