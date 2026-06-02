import { useState, type ChangeEvent } from 'react'
import './Greetings.css'
import { Card } from '@core/components/card/card'

// Formularion controlado mediante state

export const Greetings: React.FC = () => {
  const [userName, setUserName] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const handleClick = () => {
    setUserName('')
  }

  return (
    <>
      <Card>
        {userName ? (
          <>
            <p>Hola {userName}</p>
            <button onClick={handleClick}>Limpiar nombre</button>
          </>
        ) : (
          <p>Hola amigo </p>
        )}
      </Card>
      <fieldset>
        <label htmlFor="name">Introduce tu nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={userName}
        />
      </fieldset>
    </>
  )
}

/**
 * target vs. currentTarget
 * - target: se refiere al elemento específico que desencadenó el evento. Por ejemplo, si haces clic en un botón dentro de un formulario, el target sería el botón.
 *
 * - currentTarget: se refiere al elemento al que se ha asignado el controlador de eventos. En el mismo ejemplo, si el controlador de eventos está asignado al formulario, el currentTarget sería el formulario, incluso si el evento se desencadenó por un clic en el botón.
 *
 * En resumen, target se refiere al elemento que realmente desencadenó el evento, mientras que currentTarget se refiere al elemento al que se ha asignado el controlador de eventos. Esto es especialmente importante en situaciones donde los eventos pueden propagarse a través de varios elementos, como en el caso de los eventos de burbujeo.
 */

/*
 * value vs defaultValue
 * - value: el valor del input se controla desde el estado del componente. Cada vez que el usuario escribe algo, se actualiza el estado y el valor del input se actualiza en consecuencia. Esto se conoce como un componente controlado.
 * Si se utiliza value, debemos ddefinir el evento onChange para actualizar el estado del componente cada vez que el usuario escriba algo en el input. Si no se proporciona una función onChange, el input se volverá de solo lectura y no permitirá al usuario escribir nada.
 * - defaultValue: el valor del input se establece inicialmente, pero luego el usuario puede cambiarlo libremente sin que el estado del componente se actualice. Esto se conoce como un componente no controlado.
 *
 * En resumen, value se utiliza para crear componentes controlados, mientras que defaultValue se utiliza para crear componentes no controlados. En general, se recomienda utilizar componentes controlados (con value) para tener un mejor control sobre el estado del formulario y facilitar la validación y el manejo de eventos.
 */
