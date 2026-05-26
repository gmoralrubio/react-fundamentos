import { useState } from 'react'

// El ? indica que es opcional
interface Props {
  id?: number
}

export const Counter: React.FC<Props> = ({ id }) => {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Si recibe id, lo pinto */}
      <h3>Counter {id && `- ${id}`}</h3>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  )
}
