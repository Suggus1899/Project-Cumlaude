import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import './AuthPage.css';
  
interface UserData {
  email: string;
  username?: string;
}

const AuthPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [showForm, setShowForm] = useState<'login' | 'register'>('login');

  const handleLoginSuccess = (userData: { email: string }) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
    console.log('Usuario ha iniciado sesión:', userData);
  };

  const handleRegisterSuccess = (userData: { username: string; email: string }) => {
    console.log('Usuario registrado:', userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setShowForm('login');
    console.log('Usuario ha cerrado sesión.');
  };

  return (
    <div className="auth-container">
      {isLoggedIn ? (
        <div className="auth-content">
          <h2>¡Bienvenido,{currentUser?.username || currentUser?.email}! 👋</h2>
          <p>Has iniciado sesión correctamente.</p>
          <button onClick={handleLogout} style={{ backgroundColor: '#dc3545' }}>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div className="auth-content">
          {showForm === 'login' ? (
            <LoginPage
              onLoginSuccess={handleLoginSuccess}
              onToggleForm={setShowForm}
            />
          ) : (
            <RegisterPage
              onRegisterSuccess={handleRegisterSuccess}
              onToggleForm={setShowForm}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AuthPage;