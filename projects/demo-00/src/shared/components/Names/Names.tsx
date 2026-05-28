import { useEffect, useState, type MouseEventHandler } from 'react'

export const Names: React.FC = () => {
  const [names, setNames] = useState<string[]>(['Alice', 'Bob', 'Charles'])
  const namesWithStartingA = names.filter((name) => name.startsWith('A')).length

  // useEffect es un hook que nos permite ejecutar código después de que el componente se haya renderizado. Es útil para realizar tareas como peticiones a APIs, suscripciones a eventos, etc. El primer argumento es una función que se ejecutará después de cada renderizado, y el segundo argumento es un array de dependencias que indica cuándo se debe ejecutar la función. Si el array está vacío, la función se ejecutará solo una vez, después del primer renderizado. Si el array contiene variables, la función se ejecutará cada vez que alguna de esas variables cambie.
  useEffect(() => {
    console.log('Efecto inicial')

    // La función que se devuelve en el useEffect se ejecuta cuando el componente se desmonta, es decir, cuando deja de estar en el DOM. Es útil para limpiar recursos, cancelar suscripciones, etc. Deja de estar en el DOM cuando el componente padre deja de renderizarlo, o cuando se navega a otra página, etc.
    return () => {
      console.log('Limpieza')
    }
  }, []) // El array de dependencias vacío hace que el efecto se ejecute solo una vez, después del primer renderizado.

  // Si queremos ejecutar un efecto cada vez que se actualiza el estado de names, podemos añadir names al array de dependencias:
  useEffect(() => {
    console.log('Names ha cambiado:', names.at(-1))
  }, [names])

  // Estado computado:
  // Es un valor que se calcula a partir del estado, pero no es necesario guardarlo en el estado, ya que se puede calcular cada vez que se renderiza el componente.
  // Si lo guardamos en el estado, tendríamos que actualizarlo cada vez que se actualiza el estado de names, lo cual es un error común, ya que podemos olvidarnos de actualizarlo o actualizarlo de forma incorrecta.

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    setNames((prev) => [...prev, 'Antonio'])
  }

  return (
    <div>
      <h2>Names Component</h2>
      <p>Total: {namesWithStartingA}</p>
      <div>
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
      <button onClick={handleClick}>Add Antonio</button>
    </div>
  )
}

// const getNames = () => {
//   return ['Alice', 'Bob', 'Charles']
// }
