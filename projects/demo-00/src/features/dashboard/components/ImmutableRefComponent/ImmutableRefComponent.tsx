import React, { useRef } from 'react'
export const ImmutableRefComponent: React.FC = () => {
  // useRef también se puede usar para almacenar objetos o valores que no queremos que cambien entre renders, como una configuración o un valor constante. Esto es útil para evitar recrear objetos o funciones en cada renderizado.

  const configRef = useRef({
    apiUrl: 'https://api.example.com',
    timeout: 5000,
  })
  return (
    <div>
      <p>API URL: {configRef.current.apiUrl}</p>
      <p>Timeout: {configRef.current.timeout} ms</p>
    </div>
  )
}
