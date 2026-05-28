import React, { useRef } from 'react'
export const Focus: React.FC = () => {
  // Creamos la referencia para el elemento HTML
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <input
        type="text"
        // Referenciamos el elemento
        ref={inputRef}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}
