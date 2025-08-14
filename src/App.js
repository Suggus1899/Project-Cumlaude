import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    cedula: '',
    email: '',
    telefono: '',
    semestre: '',
    materiasSeleccionadas: []
  });

  const [loginData, setLoginData] = useState({
    usuario: '',
    clave: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const semestres = [
    'Primer Semestre',
    'Segundo Semestre', 
    'Tercer Semestre',
    'Cuarto Semestre',
    'Quinto Semestre',
    'Sexto Semestre',
    'Séptimo Semestre',
    'Octavo Semestre',
    'Noveno Semestre',
    'Décimo Semestre'
  ];

  // Materias por semestre para Ingeniería en Informática
  const materiasPorSemestre = {
    'Primer Semestre': [
      'Matemática 1',
      'Lógica Matemática',
      'Inglés 1',
      'Fundamentos para la Informática',
      'Economía Digital',
      'Lenguaje y Comunicación'
    ],
    'Segundo Semestre': [
      'Algoritmo I',
      'P.T.C',
      'Deporte',
      'Matemática 2',
      'Física 1'
    ],
    'Tercer Semestre': [
      'Matemática 3',
      'Física 2',
      'Algoritmo 2',
      'M.T.I',
      'Electiva II'
    ],
    'Cuarto Semestre': [
      'Matemática IV',
      'Programación III',
      'Bases de Datos I',
      'Arquitectura de Computadoras',
      'Investigación de Operaciones'
    ],
    'Quinto Semestre': [
      'Programación IV',
      'Bases de Datos II',
      'Redes de Computadoras I',
      'Sistemas Operativos',
      'Ingeniería de Software I'
    ],
    'Sexto Semestre': [
      'Programación V',
      'Redes de Computadoras II',
      'Ingeniería de Software II',
      'Inteligencia Artificial',
      'Seminario de Investigación'
    ],
    'Séptimo Semestre': [
      'Programación VI',
      'Sistemas Distribuidos',
      'Seguridad Informática',
      'Proyecto de Grado I',
      'Ética Profesional'
    ],
    'Octavo Semestre': [
      'Programación VII',
      'Proyecto de Grado II',
      'Práctica Profesional',
      'Seminario de Grado',
      'Trabajo de Grado'
    ],
    'Noveno Semestre': [
      'Proyecto de Grado III',
      'Trabajo de Grado',
      'Defensa de Grado'
    ],
    'Décimo Semestre': [
      'Trabajo de Grado',
      'Defensa de Grado'
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    setLoginError(''); // Limpiar error al escribir
  };

  const handleMateriaChange = (materia) => {
    setFormData(prev => ({
      ...prev,
      materiasSeleccionadas: prev.materiasSeleccionadas.includes(materia)
        ? prev.materiasSeleccionadas.filter(m => m !== materia)
        : [...prev.materiasSeleccionadas, materia]
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    
    // Validación básica (en producción esto se conectaría a una API)
    if (loginData.usuario.trim() === '' || loginData.clave.trim() === '') {
      setLoginError('Por favor, complete todos los campos');
      return;
    }

    // Simular validación de credenciales
    if (loginData.usuario === 'estudiante' && loginData.clave === '123456') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ usuario: '', clave: '' });
    setFormData({
      nombres: '',
      apellidos: '',
      cedula: '',
      email: '',
      telefono: '',
      semestre: '',
      materiasSeleccionadas: []
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      nombres: '',
      apellidos: '',
      cedula: '',
      email: '',
      telefono: '',
      semestre: '',
      materiasSeleccionadas: []
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  // Pantalla de Login
  if (!isLoggedIn) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🎓 Universidad Rómulo Gallegos</h1>
          <p className="App-subtitle">Cumlaude</p>
          <div className="system-name">
            <h2 className="cumlaude-title">Cumlaude</h2>
            <p className="system-description">Sistema de Inscripción de Materias</p>
          </div>
          <div className="university-info">
            <p>Inscripción de Materias - Ingeniería en Informática</p>
          </div>
        </header>

        <main className="App-main">
          <section className="login-section">
            <div className="login-container">
              <div className="login-header">
                <div className="login-icon">🔐</div>
                <h2>Iniciar Sesión</h2>
                <p>Accede a tu cuenta para inscribir materias</p>
              </div>
              
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <label htmlFor="usuario">Usuario *</label>
                  <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    value={loginData.usuario}
                    onChange={handleLoginChange}
                    required
                    className="form-input"
                    placeholder="Ingresa tu usuario"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="clave">Contraseña *</label>
                  <input
                    type="password"
                    id="clave"
                    name="clave"
                    value={loginData.clave}
                    onChange={handleLoginChange}
                    required
                    className="form-input"
                    placeholder="Ingresa tu contraseña"
                  />
                </div>

                {loginError && (
                  <div className="error-message">
                    <span className="error-icon">⚠️</span>
                    {loginError}
                  </div>
                )}

                <button type="submit" className="btn btn-primary login-btn">
                  Iniciar Sesión
                </button>
              </form>

              <div className="login-info">
                <h4>📋 Información de Acceso</h4>
                <p><strong>Usuario de Prueba:</strong> estudiante</p>
                <p><strong>Contraseña:</strong> 123456</p>
                <p className="login-note">Estas son credenciales de demostración</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="App-footer">
          <p>© 2024 Universidad Rómulo Gallegos - Cumlaude</p>
          <p>🏛️ Institución de Educación Superior Pública Nacional</p>
          <p>San Juan de los Morros, Estado Guárico, Venezuela</p>
        </footer>
      </div>
    );
  }

  // Pantalla de éxito después de inscripción
  if (isSubmitted) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🎓 Universidad Rómulo Gallegos</h1>
          <p className="App-subtitle">Cumlaude</p>
          <div className="user-info">
            <span className="user-greeting">👤 Bienvenido, {loginData.usuario}</span>
            <button onClick={handleLogout} className="btn btn-secondary logout-btn">
              Cerrar Sesión
            </button>
          </div>
        </header>
        
        <main className="App-main">
          <section className="success-section">
            <div className="success-icon">✅</div>
            <h2>¡Inscripción de Materias Exitosa!</h2>
            <p>Tu solicitud de inscripción de materias ha sido recibida correctamente.</p>
            <div className="success-details">
              <p><strong>Estudiante:</strong> {formData.nombres} {formData.apellidos}</p>
              <p><strong>Semestre:</strong> {formData.semestre}</p>
              <p><strong>Materias Inscritas:</strong> {formData.materiasSeleccionadas.length}</p>
              <p><strong>Número de Solicitud:</strong> UG-{Date.now().toString().slice(-6)}</p>
            </div>
            <p className="success-note">
              Recibirás un correo de confirmación en <strong>{formData.email}</strong> 
              con el horario de clases y los próximos pasos.
            </p>
            <div className="success-actions">
              <button onClick={resetForm} className="btn btn-primary">
                Nueva Inscripción
              </button>
              <button onClick={handleLogout} className="btn btn-secondary">
                Cerrar Sesión
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }

  // Formulario principal de inscripción
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">🎓 Universidad Rómulo Gallegos</h1>
        <p className="App-subtitle">Cumlaude</p>
        <div className="system-name">
          <h2 className="cumlaude-title">Cumlaude</h2>
          <p className="system-description">Sistema de Inscripción de Materias</p>
        </div>
        <div className="university-info">
          <p>Inscripción de Materias - Ingeniería en Informática</p>
        </div>
        <div className="user-info">
          <span className="user-greeting">👤 Bienvenido, {loginData.usuario}</span>
          <button onClick={handleLogout} className="btn btn-secondary logout-btn">
            Cerrar Sesión
          </button>
        </div>
      </header>

      <main className="App-main">
        <section className="progress-section">
          <div className="progress-bar">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Datos del Estudiante</span>
            </div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Selección de Materias</span>
            </div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Confirmación</span>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="enrollment-form">
          {currentStep === 1 && (
            <section className="form-section">
              <h2>👤 Datos del Estudiante</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="nombres">Nombres *</label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="apellidos">Apellidos *</label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cedula">Cédula de Identidad *</label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="V-12345678"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="0412-123-4567"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="semestre">Semestre Actual *</label>
                  <select
                    id="semestre"
                    name="semestre"
                    value={formData.semestre}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  >
                    <option value="">Selecciona tu semestre</option>
                    {semestres.map(semestre => (
                      <option key={semestre} value={semestre}>{semestre}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" onClick={nextStep} className="btn btn-primary">
                  Siguiente →
                </button>
              </div>
            </section>
          )}

          {currentStep === 2 && (
            <section className="form-section">
              <h2>📚 Selección de Materias</h2>
              <div className="semester-info">
                <h3>Materias Disponibles para: {formData.semestre}</h3>
              </div>
              
              {formData.semestre && (
                <div className="materias-grid">
                  {materiasPorSemestre[formData.semestre]?.map(materia => (
                    <div key={materia} className="materia-item">
                      <label className="materia-checkbox">
                        <input
                          type="checkbox"
                          checked={formData.materiasSeleccionadas.includes(materia)}
                          onChange={() => handleMateriaChange(materia)}
                        />
                        <span className="checkmark"></span>
                        <span className="materia-nombre">{materia}</span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="materias-summary">
                <h4>Resumen de Selección:</h4>
                <p><strong>Materias Seleccionadas:</strong> {formData.materiasSeleccionadas.length}</p>
                {formData.materiasSeleccionadas.length > 0 && (
                  <div className="materias-lista">
                    {formData.materiasSeleccionadas.map(materia => (
                      <span key={materia} className="materia-tag">{materia}</span>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={prevStep} className="btn btn-secondary">
                  ← Anterior
                </button>
                <button 
                  type="button" 
                  onClick={nextStep} 
                  className="btn btn-primary"
                  disabled={formData.materiasSeleccionadas.length === 0}
                >
                  Siguiente →
                </button>
              </div>
            </section>
          )}

          {currentStep === 3 && (
            <section className="form-section">
              <h2>✅ Confirmación de Inscripción</h2>
              <div className="confirmation-summary">
                <div className="summary-section">
                  <h3>Datos del Estudiante</h3>
                  <p><strong>Nombre Completo:</strong> {formData.nombres} {formData.apellidos}</p>
                  <p><strong>Cédula:</strong> {formData.cedula}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Teléfono:</strong> {formData.telefono}</p>
                </div>
                <div className="summary-section">
                  <h3>Información Académica</h3>
                  <p><strong>Semestre:</strong> {formData.semestre}</p>
                  <p><strong>Total de Materias:</strong> {formData.materiasSeleccionadas.length}</p>
                </div>
                <div className="summary-section full-width">
                  <h3>Materias Inscritas</h3>
                  <div className="materias-confirmacion">
                    {formData.materiasSeleccionadas.map(materia => (
                      <div key={materia} className="materia-confirmada">
                        <span className="materia-icon">📖</span>
                        <span>{materia}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" onClick={prevStep} className="btn btn-secondary">
                  ← Anterior
                </button>
                <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Confirmar Inscripción'}
                </button>
              </div>
            </section>
          )}
        </form>

        <footer className="App-footer">
          <p>© 2024 Universidad Rómulo Gallegos - Cumlaude</p>
          <p>🏛️ Institución de Educación Superior Pública Nacional</p>
          <p>San Juan de los Morros, Estado Guárico, Venezuela</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
