
# 🎓 Cumlaude - Universidad Rómulo Gallegos

Sistema web moderno para la **inscripción de materias** de estudiantes de Ingeniería en Informática, desarrollado con React (frontend) y Node.js + Express + MongoDB (backend).

## ✨ Características

- Autenticación segura por roles (admin, estudiante, profesor)
- Validación avanzada de inscripción de materias (prelaciones, cupos, créditos, extraordinarios, paralelos)
- Catálogo completo de materias por semestre
- Gestión de pensum y usuarios desde el backend
- API RESTful para integración frontend-backend
- Diseño responsive y moderno

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React, Vite, CSS/SASS, Context API
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Herramientas:** concurrently, dotenv, ESLint, TypeScript

## 📁 Estructura del Proyecto

```
client/
   src/
      modules/         # Módulos por dominio (auth, academic, admin, etc.)
      core/            # Hooks, utils, estilos globales
      infrastructure/  # Servicios API, cache
      assets/          # Imágenes y recursos
      App.tsx, main.tsx
   public/
   package.json

server/
   src/
      app.ts           # Archivo principal del servidor
      core/            # Lógica de dominio y aplicación
      infrastructure/
         persistence/
            mongodb/
               controllers/   # Controladores de API
               middlewares/   # Middlewares de validación y seguridad
               routes/        # Rutas Express
               schemas/       # Modelos de datos (Mongoose)
               pensumData.ts  # Datos del pensum
               connection.ts  # Conexión a MongoDB
   .env
   package.json

package.json (raíz)     # Script para ejecutar client y server juntos
```

## 🚀 Instalación y Ejecución

### Requisitos
- Node.js (v14 o superior)
- MongoDB local o remoto

### Instalación
1. Clona el repositorio:
    ```bash
    git clone <url-del-repo>
    ```
2. Instala las dependencias en la raíz:
    ```bash
    npm install
    ```

### Ejecución en desarrollo
Ejecuta ambos proyectos (client y server) a la vez:
```bash
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000/api`

### Variables de entorno
Crea un archivo `.env` en la carpeta `server` con la URI de MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/cumlaude
```

## 🔒 Validaciones y Seguridad

- Límite de unidades de crédito por inscripción (21, o 25 con extra crédito)
- Validación de prelaciones y materias paralelas
- Cupo máximo por sección (30 alumnos)
- Solicitud de apertura de sección (mínimo 15 estudiantes)
- No permite inscribir materias ya aprobadas
- Validación de extraordinarios y paralelos

## 📚 Pensum de Ingeniería en Informática

El pensum está modelado y gestionado desde el backend, con todos los semestres y materias, incluyendo sus códigos, créditos, horas y prelaciones.

## 📝 Contribuciones

Las contribuciones son bienvenidas. Abre un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

MIT

---

*Desarrollado con ❤️ para la Universidad Rómulo Gallegos - Ingeniería en Informática*
## 🎯 Carrera: Ingeniería en Informática

El sistema está diseñado específicamente para estudiantes de **Ingeniería en Informática** e incluye:


## 🎨 Diseño y UX

- **Paleta de Colores**: Azul institucional (#1e3c72, #2a5298)
- **Tipografía**: Segoe UI con fallbacks para máxima legibilidad
- **Efectos Visuales**: Sombras, transparencias y backdrop-filter
- **Animaciones**: Fade-in, hover effects y transiciones suaves
- **Layout**: CSS Grid y Flexbox para máxima flexibilidad
- **Checkboxes Personalizados**: Diseño moderno y accesible

## 📱 Responsive Design

El sistema se adapta perfectamente a:
- **Dispositivos móviles** (≤768px)
- **Tablets** y dispositivos medianos
- **Escritorios** y pantallas grandes
- **Pantallas de alta resolución**

## 🚀 Instalación y Uso

### Requisitos Previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clona o descarga** este proyecto en tu directorio local
2. **Instala las dependencias** ejecutando:
   ```bash
   npm install
   ```

### Ejecutar la Aplicación

Para iniciar el sistema en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`.

### Construir para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

## 🔧 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 📁 Estructura del Proyecto

```
src/
├── App.js          # Componente principal del sistema
├── App.css         # Estilos del sistema Cumlaude
├── index.js        # Punto de entrada de la aplicación
└── index.css       # Estilos globales

public/
└── index.html      # Archivo HTML principal

package.json        # Dependencias y scripts
README.md          # Este archivo de documentación
```

## 🌟 Características Técnicas

- **Formulario Multi-paso**: Navegación intuitiva entre secciones
- **Validación Automática**: Verificación de campos requeridos
- **Estado Persistente**: Los datos se mantienen al navegar entre pasos
- **Selección de Materias**: Sistema de checkboxes interactivo
- **Manejo de Errores**: Validación HTML5 nativa
- **Accesibilidad**: Labels asociados y navegación por teclado
- **Performance**: Componentes optimizados y lazy loading

## 🔮 Próximas Mejoras

- [ ] Integración con base de datos real de estudiantes
- [ ] Sistema de autenticación con JWT tokens
- [ ] Panel administrativo para gestión de inscripciones
- [ ] Notificaciones por email con horarios de clases
- [ ] Validación de prerrequisitos de materias
- [ ] Sistema de gestión de cupos por materia
- [ ] Dashboard de estadísticas de inscripciones
- [ ] Exportación de datos a Excel/PDF
- [ ] Integración con sistema de calificaciones
- [ ] Recuperación de contraseñas por email
- [ ] Registro de nuevos estudiantes
- [ ] Historial de inscripciones por estudiante

## 📞 Información de Contacto

**Universidad Rómulo Gallegos**
- **Carrera**: Ingeniería en Informática
- **Ubicación**: San Juan de los Morros, Estado Guárico, Venezuela
- **Teléfono**: (0243) 123-4567
- **Email**: informatica@urg.edu.ve

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerir mejoras o reportar problemas.

---

**¡Bienvenido al futuro de la inscripción de materias universitarias! 🎓✨**

*Desarrollado con ❤️ para la Universidad Rómulo Gallegos - Ingeniería en Informática*

**Cumlaude** - Sistema de Inscripción de Materias
