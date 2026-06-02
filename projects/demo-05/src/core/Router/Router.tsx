import { useRouter } from '@core/Router/hooks/useRouter'
import { AboutPage } from '@features/about/about-page'
import { DashboardPage } from '@features/dashboard/dashboard-page'
import { HomePage } from '@features/home/home-page'
import { UserPage } from '@features/user/user-page'

// Router sin librerias, solo con React
// Carga de forma dinámica las páginas en funcion del pathname
export const Router: React.FC = () => {
  // Hacemos uso de useRouter, que gestiona el estado del path
  const currentPath = useRouter()

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
