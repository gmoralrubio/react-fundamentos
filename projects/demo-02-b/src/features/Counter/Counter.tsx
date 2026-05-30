import { Card } from '@shared/components/Card'
import { useState } from 'react'

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleClick = (delta: number) => {
    setCounter((c) => c + delta)
  }

  return (
    <Card>
      <button
        className="w-11 rounded bg-blue-500 px-4 py-2 text-xl font-bold text-white"
        onClick={() => handleClick(-1)}
      >
        -
      </button>
      <span className="inline-block px-2 text-xl">{counter}</span>
      <button
        className="w-11 rounded bg-blue-500 px-4 py-2 text-xl font-bold text-white"
        onClick={() => handleClick(1)}
      >
        +
      </button>
    </Card>
  )
}
