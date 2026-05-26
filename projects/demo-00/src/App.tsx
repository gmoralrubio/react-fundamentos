import './App.css'
import { Socials } from './shared/components/Socials/Socials'
import { Docs } from './shared/components/Docs/Docs'
import { AboutPage } from './features/about/AboutPage'
import { CounterList } from './shared/components/CounterList/CounterList'
// import { Counter } from './shared/components/Counter/Counter'

export const App: React.FC = () => {
  const title = 'Vite + React'
  const appPath = 'src/app.tsx'

  return (
    <>
      <section id="center">
        <AboutPage
          title={title}
          path={appPath}
        ></AboutPage>
        <div>
          Texto desde fuera del componente pasado como <i>children</i>
          {/* Podemos poner expresiones, no cualquier tipo de bloque */}
          {/* Cuando iteramos sobre objetos, debemos añadir el key,
		  tiene que ser único */}
          <CounterList />
          {/* Counter sin id */}
          {/* <Counter /> */}
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <Docs />
        <Socials />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
