import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BadKeysExample from './keys.jsx'
import ShortCircuitEvalution from './ShortCircuitEvalution.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <BadKeysExample/> */}
    <ShortCircuitEvalution/>
  </StrictMode>,
)
