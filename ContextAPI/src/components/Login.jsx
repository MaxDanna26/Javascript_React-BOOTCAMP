import { useState } from 'react';
import { signUp, signIn, loginWithGoogle } from '../services/auth';
import { GlobalStyle, Container, Input, Botonera, Button } from '../styled';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (correo, password) => {
    await signIn(correo, password);
  }

  const handleSignUp = async (correo, password) => {
    await signUp(correo, password);
  }

  return (
    <Container $mg='5rem 0 0 0'>
      <GlobalStyle $height='100vh' />
      <p><Input $pd='4px' type='email'
        value={correo}
        placeholder='Correo'
        onChange={((e) => setCorreo(e.target.value))}>
      </Input></p>

      <p><Input $pd='4px' type='password'
        value={password}
        placeholder='Contraseña'
        onChange={(e) => setPassword(e.target.value)}>
      </Input></p>

      <Botonera>
        <Button $bg='#9BB1BF' onClick={() => handleSignUp(correo, password)}>Sign Up</Button>
        <Button $bg='#9BB1BF' onClick={() => handleSignIn(correo, password)}>Sign In</Button>
      </Botonera>
      <Button $bg='#9BB1BF' onClick={loginWithGoogle}><FcGoogle /> oogle Login</Button>

    </Container>
  );
}

export default Login;