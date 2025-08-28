import React, { lazy, Suspense } from 'react';
import AuthPage from './modules/auth/pages/AuthPage';
import './App.css';

const Dashboard = lazy(() => import('./modules/admin/dashboard/Dashboard'));

const App: React.FC = () => {
  const [showAdmin, setShowAdmin] = React.useState(false);

  return (
    <div className="App">
      <AuthPage />
      <button
        className="admin-btn"
        aria-label="Panel Administrador"
        onClick={() => setShowAdmin((prev: boolean) => !prev)}
      >
        {showAdmin ? 'Cerrar Panel Administrador' : 'Abrir Panel Administrador'}
      </button>
      {showAdmin && (
        <Suspense fallback={<div>Cargando panel...</div>}>
          <Dashboard students={[]} enrollments={[]} subjects={[]} />
        </Suspense>
      )}
    </div>
  );
}

export default App;