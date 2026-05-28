import './App.css'
import { Socials } from './shared/components/Socials/Socials'
import { Docs } from './shared/components/Docs/Docs'
import { AboutPage } from './features/about/AboutPage'
import { CounterList } from './shared/components/CounterList/CounterList'
import { Names } from './shared/components/Names/Names'
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
        >
          Texto desde fuera del componente pasado como <i>children</i>
        </AboutPage>
        <div>
          <CounterList />
          <Names />
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
