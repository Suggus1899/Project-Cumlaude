import express from 'express';
import mongoose from 'mongoose';
import pensumRouter from './infrastructure/persistence/mongodb/routes/pensumRoutes';
import { errorMiddleware } from './infrastructure/persistence/mongodb/middlewares/errorMiddleware';
import { authMiddleware } from './infrastructure/persistence/mongodb/middlewares/authMiddleware';
import { roleMiddleware } from './infrastructure/persistence/mongodb/middlewares/roleMiddleware';
import dotenv from 'dotenv';

// Importar controladores
import { createStudent, getStudentById, updateStudent, deleteStudent } from './infrastructure/persistence/mongodb/controllers/StudentController';
import { createTeacher, getTeacherById, updateTeacher, deleteTeacher } from './infrastructure/persistence/mongodb/controllers/TeacherController';
import { createAdmin, getAdminById, updateAdmin, deleteAdmin } from './infrastructure/persistence/mongodb/controllers/AdminController';

dotenv.config();

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/cumlaude')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Middlewares globales
app.use(authMiddleware); // Puedes ajustar el uso según tus rutas protegidas

// Rutas Pensum
app.use('/api/pensum', roleMiddleware(['admin', 'student', 'teacher']), pensumRouter);

// Rutas Student
app.post('/api/student', roleMiddleware(['admin']), async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear estudiante.' });
  }
});
app.get('/api/student/:id', roleMiddleware(['admin', 'student']), async (req, res) => {
  try {
    const student = await getStudentById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Estudiante no encontrado.' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener estudiante.' });
  }
});
app.put('/api/student/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    const student = await updateStudent(req.params.id, req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar estudiante.' });
  }
});
app.delete('/api/student/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    await deleteStudent(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar estudiante.' });
  }
});

// Rutas Teacher
app.post('/api/teacher', roleMiddleware(['admin']), async (req, res) => {
  try {
    const teacher = await createTeacher(req.body);
    res.status(201).json(teacher);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear profesor.' });
  }
});
app.get('/api/teacher/:id', roleMiddleware(['admin', 'teacher']), async (req, res) => {
  try {
    const teacher = await getTeacherById(req.params.id);
    if (!teacher) return res.status(404).json({ error: 'Profesor no encontrado.' });
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener profesor.' });
  }
    const cors = require('cors');
    const mongoSanitize = require('express-mongo-sanitize');
});
app.put('/api/teacher/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    const teacher = await updateTeacher(req.params.id, req.body);
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar profesor.' });
  }
});
app.delete('/api/teacher/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    await deleteTeacher(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar profesor.' });
  }
});

// Rutas Admin
app.post('/api/admin', roleMiddleware(['admin']), async (req, res) => {
  try {
    const admin = await createAdmin(req.body);
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear admin.' });
  }
});
app.get('/api/admin/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    const admin = await getAdminById(req.params.id);
    if (!admin) return res.status(404).json({ error: 'Admin no encontrado.' });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener admin.' });
  }
});
app.put('/api/admin/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    const admin = await updateAdmin(req.params.id, req.body);
    res.json(admin);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar admin.' });
  }
});
app.delete('/api/admin/:id', roleMiddleware(['admin']), async (req, res) => {
  try {
    await deleteAdmin(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar admin.' });
  }
});

// Middleware de errores
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto ${PORT}`);
});
