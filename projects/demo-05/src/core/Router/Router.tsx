import AboutPage from '@features/about/about-page'
import DashboardPage from '@features/dashboard/dashboard-page'
import HomePage from '@features/home/home-page'
import UserPage from '@features/user/user-page'
import { Route, Routes } from 'react-router'

// Este componente define las rutas de la aplicación
// Se pueden definir directamente en el App, pero lo separamos para mantener el código más limpio
export const Router: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="/dashboard"
        element={<DashboardPage />}
      />
      <Route
        path="/user"
        element={<UserPage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="*"
        element={<div>404 not found</div>}
      />
    </Routes>
  )
}
