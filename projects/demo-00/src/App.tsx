<<<<<<< HEAD
import './App.css'
import { Socials } from './shared/components/Socials/Socials'
import { Docs } from './shared/components/Docs/Docs'
import { AboutPage } from './features/about/AboutPage'
import { CounterList } from './shared/components/CounterList/CounterList'
// import { Counter } from './shared/components/Counter/Counter'

export const App: React.FC = () => {
  const title = 'Vite + React'
  const appPath = 'src/app.tsx'
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)

  return (
    <>
      <section id="center">
<<<<<<< HEAD
        <AboutPage
          title={title}
          path={appPath}
        >
          Texto desde fuera del componente pasado como <i>children</i>
        </AboutPage>
        <div>
          <CounterList />
        </div>
=======
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
<<<<<<< HEAD
        <Docs />
        <Socials />
=======
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
<<<<<<< HEAD
=======

export default App
>>>>>>> d4af7dc (feat: añadidos nuevo proyecto con React y Vite)
