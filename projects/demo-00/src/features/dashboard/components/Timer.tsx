import { useEffect, useState } from 'react'
import './Timer.css'

export const Timer: React.FC = () => {
  console.log('render')

  const [timer, setTimer] = useState<number>(0)
  const [isActive, setIsActive] = useState<boolean>(false)

  // useEffect se ejecuta cada vez que cambia el timer,
  // esto es, cada vez que se ejecuta el interval
  useEffect(() => {
    if (!isActive) return

    const interval: NodeJS.Timeout = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    // Utiliza la función de retorno para limpiar el interval cuando el componente se desmonte o cuando seteemos isActive a false (stop)
    return () => {
      if (interval) clearInterval(interval)
      console.log('out')
    }
  }, [isActive])

  return (
    <div className="timer">
      <output>{timer}</output>
      <button onClick={() => setIsActive(true)}>Start</button>
      <button onClick={() => setTimer(0)}>Reset</button>
      <button onClick={() => setIsActive(false)}>Stop</button>
    </div>
  )
}
