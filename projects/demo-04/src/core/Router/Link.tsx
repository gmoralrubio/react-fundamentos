import { useRouter } from '@core/Router/hooks/useRouter'
import type { ReactNode, MouseEvent } from 'react'

interface Props {
  to: string
  children: ReactNode
}

export const Link: React.FC<Props> = ({ to, children }) => {
  const currentPath = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    // Cambia la URL sin recargar la página
    // La API history de HTML5 nos permite manipular el historial del navegador, y con pushState podemos cambiar la URL sin recargar la página
    // pushState recibe tres argumentos: el estado (null en este caso), el título (vacío) y la URL a la que queremos navegar
    // con popStateEvent podemos simular un cambio de URL para que el router detecte el cambio y actualice la página que se muestra
    // Luego, para que el router detecte el cambio de URL, disparamos un evento 'popstate' que es el que escucha el router para actualizar la página que se muestra

    // Escribimnos la nueva URL en el historial del navegador, pero no recargamos la página, por lo que no navegamos a la nueva URL
    // Para que nevegue a la página, disparamos un evento 'popstate' que es el que escucha el router para actualizar la página que se muestra
    window.history.pushState(null, '', to)
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  // Devuelve una etiqueta <a>
  return (
    <a
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
