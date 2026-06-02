// Custom hook

import { useEffect, useState } from 'react'

// La principal funcion de un custom hook es compartir logica entre componentes. Permite separar la lógica de renderizado, lo que hace que el código sea más limpio y reutilizable. Además, los custom hooks pueden manejar estados y efectos secundarios, lo que los hace ideales para encapsular lógica compleja relacionada con la navegación, como la gestión de rutas, la actualización del historial del navegador, o la sincronización de la URL con el estado de la aplicación.
export const useRouter = () => {
	// Almacenamos la ruta actual
	const [currentPath, setCurrentPath] = useState<string>(
		window.location.pathname
	)

	// Registra el listener del evento y luego lo limpia
	useEffect(() => {
		// Escuchamos los cambios en la URL que realiza el componente Link para actualizar la ruta actual
		window.addEventListener('popstate', handlePopState)

		return () => window.removeEventListener('popstate', handlePopState)
	}, [])

	// Actualiza el path
	const handlePopState = () => setCurrentPath(window.location.pathname)

	// Solo devolvemos el path actual, que es lo que nos interesa en el router para mostrar la página correspondiente.
	return currentPath
}
