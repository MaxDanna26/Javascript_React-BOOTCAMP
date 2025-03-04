import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProvider from './provider/UserProvider.jsx'
import { GlobalStyle } from './styled.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
