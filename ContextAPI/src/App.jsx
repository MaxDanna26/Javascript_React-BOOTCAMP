import Login from "./components/Login"
import Router from '../app/Router'
import { useUserContext } from "./provider/UserProvider";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from "react";
import { auth } from '../src/services/firebase.js'


const App = () => {

  const { user, setUser } = useUserContext();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log('user', user, ' userId:', user.uid);
        setUser(user);
      } else {
        console.log("No user logged");
        setUser(null);
      }
    });
  }, [setUser]);

  return user ? <Router /> : <Login />
}

export default App
