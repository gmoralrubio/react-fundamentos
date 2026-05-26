import { Socials } from './shared/components/socials/Socials'
import { Docs } from './shared/components/docs/Docs'
import './App.css'
import { Counter } from './shared/components/counter/Counter'
import { AboutPage } from './features/about/AboutPage'

export const App: React.FC = () => {
  const title = 'Vite + React'
  const appPath = 'src/app.tsx'

  const counters = [1, 2, 3]

  return (
    <>
      <section id="center">
        <AboutPage title={title} path={appPath}></AboutPage>
        <div>
          Texto desde fuera del componente pasado como <i>children</i>
          {/* Podemos poner expresiones, no cualquier tipo de bloque */}
          {/* Cuando iteramos sobre objetos, debemos añadir el key,
		  tiene que ser único */}
          {counters.map((id) => (
            <Counter key={id} id={id} />
          ))}
          {/* Counter sin id */}
          <Counter />
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
