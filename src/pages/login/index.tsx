import React, { useState } from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import { useAuth } from '../../contexts/AuthContext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
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

  const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden');

  // return (
  //   <AuthLayout>
  //     <div className="login">
  //       <h2>Login</h2>
  //       {error && <p className="login__error">{error}</p>}
  //       <form onSubmit={handleSubmit} className="login__form">
  //         <div className="login__input-group">
  //           <label htmlFor="username">Username:</label>
  //           <input
  //             type="text"
  //             id="username"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="login__input-group">
  //           <label htmlFor="password">Password:</label>
  //           <input
  //             type="password"
  //             id="password"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <button type="submit" className="login__button">Login</button>
  //       </form>
  //     </div>
  //   </AuthLayout>
  // );
  return (
    <div className={containerClassName}>
      <div className="flex flex-column align-items-center justify-content-center">
        <img src="/images/logo.jpg" style={{ borderRadius: '50%' }} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
        <div style={{
          borderRadius: '56px',
          padding: '0.3rem',
          background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
        }}>

          <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>

            <div className="text-center mb-5">
              <img src="/images/logo.jpg" alt="Image" style={{ borderRadius: '50%' }} height="50" className="mb-3" />
              <div className="text-900 text-3xl font-medium mb-3">Welcome!</div>
              <span className="text-600 font-medium">Sign in to continue</span>
            </div>

            <div>
              <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                Email
              </label>
              <InputText id="email1" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

              <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                Password
              </label>
              <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <div className="flex align-items-center">
                  <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(!!e.checked)} className="mr-2"></Checkbox>
                  <label htmlFor="rememberme1">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                  Forgot password?
                </a>
              </div>
              <Button label="Sign In" className="w-full p-3 text-xl" onClick={handleSubmit}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Login;
