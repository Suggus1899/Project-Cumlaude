import React, { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: (userData: { email: string }) => void;
  onToggleForm: (form: 'login' | 'register') => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onToggleForm }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    console.log('Intentando iniciar sesión con:', { email, password });

    setTimeout(() => {
      if (email === 'joseluisrodri540@gmail.com' && password === 'Admin123') {
        onLoginSuccess({ email });
      } else {
        setError('Correo o contraseña incorrectos.');
      }
    }, 1000);
  };

  return (
    <div className="auth-form">
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginEmail">Correo Electrónico:</label>
        <input
          type="email"
          id="loginEmail"
          placeholder="Correo"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="loginPassword">Contraseña:</label>
        <input
          type="password"
          id="loginPassword"
          placeholder="Contraseña"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p className="toggle-link" onClick={() => onToggleForm('register')}>
        ¿No tienes cuenta? Regístrate aquí.
      </p>
    </div>
  );
};

export default LoginPage;