import { AboutPage } from '@features/about/about-page'
import { DashboardPage } from '@features/dashboard/dashboard-page'
import { HomePage } from '@features/home/home-page'
import { UserPage } from '@features/user/user-page'
import { useEffect, useState } from 'react'

// Router sin librerias, solo con React
// Carga de forma dinámica las páginas en funcion del pathname
export const Router: React.FC = () => {
  // Almacenamos la ruta actual
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname
  )

  // Actualiza el path
  const handlePopState = () => setCurrentPath(window.location.pathname)

  // Registra el listener del evento y luego lo limpia
  useEffect(() => {
    // Escuchamos los cambios en la URL que realiza el componente Link para actualizar la ruta actual
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // CurrentPage es un componente, que asociaremos a la pagina correspondiente
  let CurrentPage: React.FC = () => null

  switch (currentPath) {
    case '/':
    case '/home':
      CurrentPage = HomePage
      break
    case '/dashboard':
      CurrentPage = DashboardPage
      break
    case '/user':
      CurrentPage = UserPage
      break
    case '/about':
      CurrentPage = AboutPage
      break
    default:
      CurrentPage = () => <h2>404 not found</h2>
      break
  }

  // Devolvemos el componente
  return <CurrentPage />
}
