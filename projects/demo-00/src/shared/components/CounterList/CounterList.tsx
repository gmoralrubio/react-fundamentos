import { useState } from 'react'
import { Counter } from '../Counter/Counter'
import './CounterList.css'
export const CounterList: React.FC = () => {
  const counters = [1, 2, 3]

  const [total, setTotal] = useState(0)

  // Esta funcion se la pasamos a los hijos para que actualicen
  // el contador total de counter list
  const handleCounterChange = (delta: number = 1): void => {
    setTotal((prev) => prev + delta)
  }

  return (
    <div className="counter-list">
      <p>Counters total: {total}</p>
      <div>
        {/* Podemos poner expresiones, no cualquier tipo de bloque */}
        {/* Cuando iteramos sobre objetos, debemos añadir el key,
		  tiene que ser único */}
        {counters.map((id) => (
          <Counter
            key={id}
            id={id}
            onChange={handleCounterChange}
          />
        ))}
      </div>
    </div>
  )
}
