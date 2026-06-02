import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

// Importamos paginas lazy. Carga de forma asíncrona las páginas en función del pathname. Esto mejora el rendimiento de la aplicación, ya que solo se carga el código necesario para cada página.
// Para poder hacer esto, las páginas deben ser exportadas por defecto
const HomePage = React.lazy(() => import('@features/home/home-page'))
const DashboardPage = React.lazy(
  () => import('@features/dashboard/dashboard-page')
)
const UserPage = React.lazy(() => import('@features/user/user-page'))
const AboutPage = React.lazy(() => import('@features/about/about-page'))

// Este componente define las rutas de la aplicación
// Se pueden definir directamente en el App, pero lo separamos para mantener el código más limpio
export const RouterLazy: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // El componente Suspense se encarga de mostrar un fallback mientras se carga el componente lazy. Aqui podemos meter un loader o un mensaje de carga.
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <DashboardPage />
          </Suspense>
        }
      />
      <Route
        path="/user"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <UserPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={<div>404 not found</div>}
      />
    </Routes>
  )
}
