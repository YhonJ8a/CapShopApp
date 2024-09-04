import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate, Navigate } from 'react-router-dom'; // Usamos useNavigate en lugar de useHistory
import '../assets/styles/Login.css';

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate(); // Cambiado a useNavigate

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  if (!authContext) return<Navigate to="/login" replace />;

  const { login } = authContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      const userData = { id: 1, name: 'Admin User', email: 'admin@example.com' };
      login(userData);
      navigate('/home');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
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
  );
};

export default Login;
