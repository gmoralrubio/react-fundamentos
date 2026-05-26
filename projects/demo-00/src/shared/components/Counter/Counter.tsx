import { useState, type MouseEvent } from 'react'
import './Counter.css'
// El ? indica que es opcional
interface Props {
  id?: number
  onChange?: (delta?: number) => void
}

const INITIAL_COUNT: number = 0

export const Counter: React.FC<Props> = ({ id, onChange }) => {
  // El estado es local, cada componente tiene su propio estado
  // El estado es inmutable, no se puede modificar directamente, hay que usar el setter
  // El estado es asíncrono, no se actualiza inmediatamente, sino en el siguiente renderizado
  // useState admite genericos, si inicializamos con un number, TS infiere que es number y no es necesario tiparlo
  const [count, setCount] = useState<number>(INITIAL_COUNT)

  // Se puede hacer un union al tipar useState, ya que en este caso puede ser el usuario o null en un primer momento
  // const [value, setValue] = useState<User | null>(null);

  //   React usa su propio sistema de eventos que encapsulan los eventos nativos
  //   En lugar de Event -> SyntheticEvent
  //   SyntheticEvent usa genericos, podemos especificar el tipo de evento
  //   const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
  //     setCount((count) => count - 1)
  //     onChange?.()
  //   }
  //   Tambien podemos usar el tipo especifico de react
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Capturamos el elemnto que dispara el evento con e.currentTarget
    //  y extraemos el valor del atributo data-delta
    const delta = Number(e.currentTarget.dataset.delta)
    setCount((count) => count + delta)
    onChange!(delta)
  }

  return (
    <div className="counter-group">
      {/* Si recibe id, lo pinto */}
      <h3>Counter {id && `- ${id}`}</h3>
      <button
        type="button"
        className="counter"
        data-delta={-1}
        onClick={handleClick}
      >
        -
      </button>
      <span>{count}</span>
      <button
        type="button"
        className="counter"
        data-delta={+1}
        onClick={handleClick}
      >
        +
      </button>
    </div>
  )
}
