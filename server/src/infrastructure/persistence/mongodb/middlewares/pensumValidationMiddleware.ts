import { Request, Response, NextFunction } from 'express';

export function validatePensum(req: Request, res: Response, next: NextFunction) {
  const { pensumId, carrera, semestres } = req.body;
  if (!pensumId || !carrera || !Array.isArray(semestres)) {
    return res.status(400).json({ error: 'Datos de pensum incompletos.' });
  }
  for (const semestre of semestres) {
    if (
      typeof semestre.numero !== 'number' ||
      !Array.isArray(semestre.materias)
    ) {
      return res.status(400).json({ error: 'Datos de semestre inválidos.' });
    }
    for (const materia of semestre.materias) {
      if (
        !materia.codigo ||
        !materia.nombre ||
        typeof materia.horasTeoricas !== 'number' ||
        typeof materia.horasPracticas !== 'number' ||
        typeof materia.horasSemanales !== 'number' ||
        typeof materia.unidadesCredito !== 'number'
      ) {
        return res.status(400).json({ error: 'Datos de materia inválidos.' });
      }
    }
  }
  next();
}
