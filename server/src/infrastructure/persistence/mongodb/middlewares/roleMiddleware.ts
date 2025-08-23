import { Request, Response, NextFunction } from 'express';

export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Ejemplo: Verificar el rol del usuario
    const userRole = req.headers['x-user-role'];
    if (!roles.includes(String(userRole))) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
  };
};
