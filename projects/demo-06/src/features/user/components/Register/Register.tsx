import { Card } from '@core/components/card/card'
import { useId, useState } from 'react'

interface User {
  username: string
  password: string
  acceptsConditions: boolean
  turn: string
  course: string
}

const initialUser = {
  username: '',
  password: '',
  acceptsConditions: false,
  turn: '',
  course: '',
}

export const Register: React.FC = () => {
  const [user, setUser] = useState<User>(initialUser)

  // Usamos el hook useId() para generar los ids y que sean únicos, en el caso de que dupliquemos el form
  const registerIds = {
    username: useId(),
    password: useId(),
    acceptsConditions: useId(),
    turn: useId(),
    course: useId(),
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Register data: ', user)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Extraemos las propiedades que usaremos de e.currentTarget
    const { name, value, type } = e.target

    // seteamos el user en funcion del campo name, manteniendo los datos previos
    // comprobamos si es un checkbox y casteamos `checked` cuando corresponde
    setUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? e.target.checked : value,
    }))
  }

  return (
    <Card title="Register">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor={registerIds.username}>User name</label>
          <input
            type="text"
            name="username"
            id={registerIds.username}
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor={registerIds.password}>Password</label>
          <input
            type="password"
            name="password"
            id={registerIds.password}
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor={registerIds.acceptsConditions}>
            <input
              type="checkbox"
              name="acceptsConditions"
              id={registerIds.acceptsConditions}
              checked={user.acceptsConditions}
              onChange={handleChange}
            />
            Acepta condiciones
          </label>
        </fieldset>
        <fieldset>
          <div>
            <input
              type="radio"
              name="turn"
              id={registerIds.turn + 'morning'}
              value="morning"
              onChange={handleChange}
              checked={user.turn === 'morning'}
            />
            <label htmlFor={registerIds.turn + 'morning'}>Mañana</label>
          </div>
          <div>
            <input
              type="radio"
              name="turn"
              id={registerIds.turn + 'afternoon'}
              value="afternoon"
              onChange={handleChange}
              checked={user.turn === 'afternoon'}
            />
            <label htmlFor={registerIds.turn + 'afternoon'}>Tarde</label>
          </div>
          <label htmlFor={registerIds.course}>
            <select
              name="course"
              id={registerIds.course}
              value={user.course || ''}
              onChange={handleChange}
            >
              <option value="">Selecciona un turno</option>
              <option value="react">react</option>
              <option value="angular">angular</option>
              <option value="vue">vue</option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </Card>
  )
}
