import type { MenuOption } from '@core/types/menu-option'
import { Layout } from '@core/components/layout/layout'
import './App.css'
import { Router } from '@core/Router/Router'

// Genera el menu.
// Estas opciones deben coincidir con las que tenemos en el Router
const getOptions = (): MenuOption[] => {
  return [
    {
      path: '/home',
      label: 'Inicio',
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
    },
    {
      path: '/about',
      label: 'About',
    },
    {
      path: '/user',
      label: 'User',
    },
  ]
}

export const App: React.FC = () => {
  const appTitle = 'Demo 2'
  const subTitle = 'React - TS  Vite'

  const menuOptions: MenuOption[] = getOptions()

  return (
    <Layout
      appTitle={appTitle}
      subTitle={subTitle}
      menuOptions={menuOptions}
    >
      {/* invocamos el router */}
      <Router />
    </Layout>
  )
}
