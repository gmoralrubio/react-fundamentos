import { Socials } from './shared/components/socials/Socials'
import { Docs } from './shared/components/docs/Docs'
import { Hero } from './shared/components/hero/Hero'
import './App.css'
import { Counter } from './shared/components/counter/Counter'

export const App: React.FC = () => {
	const title = 'Vite + React'
	const appPath = 'src/app.tsx'

	const counters = [1, 2, 3]

	return (
		<>
			<section id="center">
				<Hero title={title} path={appPath} />
				{/* Podemos poner expresiones, no cualquier tipo de bloque */}
				{/* Cuando iteramos sobre objetos, debemos añadir el key, tiene que ser único */}
				{counters.map((id) => (
					<Counter key={id} id={id} />
				))}
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
