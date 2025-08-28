import { Request, Response, NextFunction } from 'express';

// Suponiendo que req.body tiene: student, materiasAInscribir, pensum, extraCredito, paralelo, extraordinario
export async function enrollmentValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  const {
    student,
    materiasAInscribir,
    pensum,
    extraCredito = false,
    paralelo = false,
    extraordinario = false
  } = req.body;

  // Validar materias repetidas o ya aprobadas
  const materiasAprobadas = new Set(student.materiasAprobadas || []);
  for (const materia of materiasAInscribir) {
    if (materiasAprobadas.has(materia.codigo)) {
      return res.status(400).json({ error: `La materia ${materia.nombre} ya está aprobada.` });
    }
  }

  // Validar prelaciones
  for (const materia of materiasAInscribir) {
    for (const prelacion of materia.prelaciones) {
      if (!materiasAprobadas.has(prelacion) && !materiasAInscribir.find(m => m.codigo === prelacion && paralelo)) {
        return res.status(400).json({ error: `No cumple prelación para ${materia.nombre}.` });
      }
    }
  }

  // Validar unidades de crédito
  let unidadesInscritas = materiasAInscribir.reduce((acc, m) => acc + m.unidadesCredito, 0);
  let limite = extraCredito ? 25 : 21;
  if (unidadesInscritas > limite) {
    return res.status(400).json({ error: `Excede el límite de unidades de crédito (${limite}).` });
  }

  // Validar cupo por sección
  for (const materia of materiasAInscribir) {
    if (materia.cupoActual >= 30) {
      return res.status(400).json({ error: `No hay cupo disponible en la sección de ${materia.nombre}.` });
    }
  }

  // Validar apertura de sección
  if (req.body.solicitarAperturaSeccion) {
    if ((req.body.solicitudAlumnos || 0) < 15) {
      return res.status(400).json({ error: 'Se requieren mínimo 15 estudiantes para abrir una sección.' });
    }
  }

  // Validar extraordinario
  if (extraordinario) {
    for (const materia of materiasAInscribir) {
      if (!materia.permiteExtraordinario) {
        return res.status(400).json({ error: `La materia ${materia.nombre} no permite extraordinario.` });
      }
    }
  }

  // Validar paralelo
  if (paralelo) {
    for (const materia of materiasAInscribir) {
      for (const prelacion of materia.prelaciones) {
        if (!materiasAprobadas.has(prelacion) && !materiasAInscribir.find(m => m.codigo === prelacion)) {
          return res.status(400).json({ error: `No cumple prelación para paralelo en ${materia.nombre}.` });
        }
      }
    }
  }

  next();
}
