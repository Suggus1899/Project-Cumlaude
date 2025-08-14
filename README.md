# 🎓 Cumlaude - Universidad Rómulo Gallegos

Sistema web moderno y atractivo para la **inscripción de materias** de estudiantes de Ingeniería en Informática, desarrollado con React y diseñado específicamente para la Universidad Rómulo Gallegos.

## ✨ Características

- **🔐 Sistema de Autenticación** - Login seguro con usuario y contraseña
- **Formulario Multi-paso** - Proceso de inscripción de materias organizado en 3 pasos
- **Selección de Materias** - Catálogo completo por semestre para Ingeniería en Informática
- **Validación en Tiempo Real** - Verificación automática de campos requeridos
- **Diseño Responsive** - Se adapta perfectamente a todos los dispositivos
- **Interfaz Moderna** - Diseño atractivo con gradientes y efectos visuales
- **Barra de Progreso** - Indicador visual del avance en el proceso
- **Confirmación de Datos** - Resumen final antes del envío
- **Página de Éxito** - Confirmación de inscripción exitosa
- **Información Institucional** - Datos importantes para los estudiantes
- **Gestión de Sesión** - Control de acceso y cierre de sesión

## 🔐 Sistema de Login

### **Credenciales de Acceso:**
- **Usuario:** `estudiante`
- **Contraseña:** `123456`

### **Funcionalidades del Login:**
- **Validación de Credenciales** - Verificación de usuario y contraseña
- **Manejo de Errores** - Mensajes informativos para credenciales incorrectas
- **Persistencia de Sesión** - Mantiene la sesión activa durante la inscripción
- **Cerrar Sesión** - Botón para salir del sistema en cualquier momento
- **Información de Usuario** - Muestra el nombre del usuario logueado

### **Flujo de Autenticación:**
1. **Pantalla de Login** - Formulario de acceso principal
2. **Validación** - Verificación de credenciales
3. **Acceso al Sistema** - Formulario de inscripción de materias
4. **Gestión de Sesión** - Control de acceso y logout

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0** - Biblioteca de interfaz de usuario
- **CSS3 Moderno** - Grid, Flexbox, animaciones y efectos backdrop-filter
- **Hooks de React** - useState para manejo de estado del formulario
- **Diseño Responsive** - Media queries para adaptación móvil
- **Validación HTML5** - Campos requeridos y tipos de entrada específicos

## 📋 Funcionalidades del Sistema

### **Autenticación y Seguridad:**
- Sistema de login con validación de credenciales
- Control de acceso a funcionalidades del sistema
- Gestión de sesión de usuario
- Cerrar sesión desde cualquier pantalla

### **Inscripción de Materias:**
- Formulario de datos personales del estudiante
- Selección de semestre académico
- Catálogo completo de materias por semestre
- Selección múltiple de materias con checkboxes
- Resumen y confirmación de inscripción
- Generación de número de solicitud único

## 🎯 Carrera: Ingeniería en Informática

El sistema está diseñado específicamente para estudiantes de **Ingeniería en Informática** e incluye:

### 📚 Materias por Semestre:
- **Primer Semestre**: Matemática 1, Lógica Matemática, Inglés 1, Fundamentos para la Informática, Economía Digital, Lenguaje y Comunicación
- **Segundo Semestre**: Algoritmo I, P.T.C, Deporte, Matemática 2, Física 1
- **Tercer Semestre**: Matemática 3, Física 2, Algoritmo 2, M.T.I, Electiva II
- **Cuarto Semestre**: Matemática IV, Programación III, Bases de Datos I, Arquitectura de Computadoras, Investigación de Operaciones
- **Quinto Semestre**: Programación IV, Bases de Datos II, Redes de Computadoras I, Sistemas Operativos, Ingeniería de Software I
- **Sexto Semestre**: Programación V, Redes de Computadoras II, Ingeniería de Software II, Inteligencia Artificial, Seminario de Investigación
- **Séptimo Semestre**: Programación VI, Sistemas Distribuidos, Seguridad Informática, Proyecto de Grado I, Ética Profesional
- **Octavo Semestre**: Programación VII, Proyecto de Grado II, Práctica Profesional, Seminario de Grado, Trabajo de Grado
- **Noveno y Décimo**: Trabajo de Grado y Defensa

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
