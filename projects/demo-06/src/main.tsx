import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from '@core/components/app/App'

// Existen varias versiones de Router
// Vamos a usar el modo declarativo
import { BrowserRouter as Router } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Componente de React Router que envuelve la app */}
    {/* Crea un entorno donde podemos definir rutas */}
    <Router>
      <App />
    </Router>
  </StrictMode>
)
