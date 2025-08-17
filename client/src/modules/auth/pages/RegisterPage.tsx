import React, { useState } from 'react';

interface RegisterPageProps {
  onRegisterSuccess: (userData: { username: string; email: string }) => void;
  onToggleForm: (form: 'login' | 'register') => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onRegisterSuccess, onToggleForm }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    console.log('Intentando registrar con:', { username, email, password });

    setTimeout(() => {
      setSuccess('¡Registro exitoso! Ya puedes iniciar sesión.');
      onRegisterSuccess({ username, email });
      setEmail('');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      onToggleForm('login');
    }, 1500);
  };

  return (
    <div className="auth-form">
      <h2>Registrarse</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'lightgreen' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="registerUsername">Nombre de Usuario:</label>
        <input
          type="text"
          id="registerUsername"
          placeholder="tu_usuario"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="registerEmail">Correo Electrónico:</label>
        <input
          type="email"
          id="registerEmail"
          placeholder="Correo"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="registerPassword">Contraseña:</label>
        <input
          type="password"
          id="registerPassword"
          placeholder="Contraseña"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Contraseña"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p className="toggle-link" onClick={() => onToggleForm('login')}>
        ¿Ya tienes cuenta? Inicia Sesión.
      </p>
    </div>
  );
};

export default RegisterPage;