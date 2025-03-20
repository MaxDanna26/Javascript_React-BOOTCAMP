import Router from '../app/Router'
import { useUserContext } from "./provider/UserProvider";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from "react";
import { auth } from '../src/services/firebase.js'
import Login from './components/Login.jsx';

const App = () => {

  const { user, setUser } = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  return user ? <Router /> : <Login />
}

export default App
