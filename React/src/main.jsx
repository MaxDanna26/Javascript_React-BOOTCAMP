import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../Router React/src/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
