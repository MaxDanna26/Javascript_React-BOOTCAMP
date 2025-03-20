import { useState } from 'react';
import { signUp, signIn, loginWithGoogle } from '../services/auth';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = (name, correo, password) => {
    signUp(name, correo, password);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          value={name}
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
      </p>

      <p>
        <input
          type="email"
          value={correo}
          placeholder="Correo"
          onChange={(e) => setCorreo(e.target.value)}
        />
      </p>

      <p>
        <input
          type="password"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>

      <div>
        <button onClick={() => handleSignUp(name, correo, password)}>Sign Up</button>
        <button onClick={() => signIn(correo, password)}>Sign In</button>
      </div>
      <button onClick={loginWithGoogle}>
        <FcGoogle /> Google Login
      </button>
    </div>
  );
};

export default Login;
