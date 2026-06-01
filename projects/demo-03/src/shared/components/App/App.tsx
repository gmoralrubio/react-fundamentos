import './App.css'
import { Greetings } from '@features/user/components/Greetings/Greetings'
import { Login } from '@features/user/components/Login/Login'
import { Register } from '@features/user/components/Register/Register'

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Demo 03</h1>
      </header>
      <main>
        <Greetings />
        <Login />
        <Register />
      </main>
    </>
  )
}

export default App
