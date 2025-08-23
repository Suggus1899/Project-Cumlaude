import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Ejemplo: Verificar si el usuario está autenticado
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'No autorizado' });
  }
  // Aquí puedes agregar lógica para verificar el token JWT
  next();
};
