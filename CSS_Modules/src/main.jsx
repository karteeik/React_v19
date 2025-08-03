import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Container from './Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Container/>
  </StrictMode>,
)
