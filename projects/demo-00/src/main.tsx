import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import { App } from './App.tsx'

createRoot(document.querySelector('#root') as HTMLElement).render(
=======
import App from './App.tsx'

createRoot(document.querySelector('#root')!).render(
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)
	<StrictMode>
		<App />
	</StrictMode>,
)
