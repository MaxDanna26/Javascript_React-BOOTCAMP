import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'
// import { onRoomUpdated } from '../services/api';

const AppContext = createContext();
export const useLobbyContext = () => useContext(AppContext);

const LobbyProvider = ({ children }) => {
  const [lobby, setLobby] = useState({});

  useEffect(() => { onRoomUpdated() }, [])

  return (
    <AppContext.Provider value={{ lobby, setLobby }}>
      {children}
    </AppContext.Provider>
  );

}

export default LobbyProvider;

LobbyProvider.propTypes = {
  children: PropTypes.node,
}