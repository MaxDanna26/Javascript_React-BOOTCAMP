import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LobbyProvider from './provider/LobbyProvider.jsx'

createRoot(document.getElementById('root')).render(
  <LobbyProvider>
    <App />
  </LobbyProvider>
)
