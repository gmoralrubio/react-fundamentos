import { useRef, useState } from 'react'
import './RenderCount.css'

export const RenderCount: React.FC = () => {
  // useRef es un hook que nos permite mantener un valor entre renders sin que su actualización provoque un nuevo renderizado. Es útil para contar renders o almacenar valores mutables que no afectan la UI.
  // permite referenciar un valor que no es necesario para el renderizado.

  // let renderCount = 0 // cada render se reinicia
  // renderCount++ // Si no usamos ref, react no puede mantener el valor entre renders

  const renderCountRef = useRef(0) // cada render mantiene el valor previo
  renderCountRef.current++ // acedemos al valor con .current

  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    // setCount(count + 1);
    setCount((c) => c + 1)
    console.log('Component State', count)
    renderCountRef.current++ // acedemos al valor con .current
  }

  return (
    <>
      <h2>React with state</h2>
      <div className="render-count">
        <button onClick={handleClick}>count is {count}</button>
        {/* <p>Render number (var) {renderCount}</p> */}
        <p>Render number (ref) {renderCountRef.current}</p>
      </div>
    </>
  )
}
