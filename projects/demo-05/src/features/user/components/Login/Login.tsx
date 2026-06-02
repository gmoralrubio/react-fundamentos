// Ejemplo de formulario sencillo no controlado

import { Card } from '@core/components/card/card'

export const Login: React.FC = () => {
  // Tipamos con React.SubmitEvent<HTMLFormElement>, ya wue submitEvent no es genérico, hay que usar React.

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = {
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    }
    console.log('Login data: ', user)
  }

  return (
    <Card title="Login">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">User name</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="username">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </fieldset>
        <button type="submit">Login</button>
      </form>
    </Card>
  )
}
