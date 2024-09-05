import React, { useState } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { useAuth } from '../../contexts/AuthContext';// Cambiado para que importe desde la raíz

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      const userData = { id: 1, name: 'Admin User', email: 'admin@example.com' };
      login(userData);
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <AuthLayout>
      <div className="login">
        <h2>Login</h2>
        {error && <p className="login__error">{error}</p>}
        <form onSubmit={handleSubmit} className="login__form">
          <div className="login__input-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login__input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login__button">Login</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
