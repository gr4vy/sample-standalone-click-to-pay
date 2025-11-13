import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@gr4vy/poutine-react/dist/poutine-react.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
