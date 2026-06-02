import type { MenuOption } from '@core/types/menu-option'
import { Layout } from '@core/components/layout/layout'
import './App.css'
import { RouterLazy } from '@core/Router/RouterLazy'

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
  const appTitle = 'Demo 5'
  const subTitle = 'React - TS  Vite'

  const menuOptions: MenuOption[] = getOptions()

  return (
    <Layout
      appTitle={appTitle}
      subTitle={subTitle}
      menuOptions={menuOptions}
    >
      {/* invocamos el router */}
      <RouterLazy />
    </Layout>
  )
}
