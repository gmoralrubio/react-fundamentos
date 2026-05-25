import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'
import heroImg from '../../../assets/hero.png'

// Tambien podemos definir un interfaz para el componente
interface Props {
	title: string
	path: string
}

// React.FC es un generic, por lo que podemos tipar las props en el
export const Hero: React.FC<Props> = ({ title, path }) => {
	return (
		<>
			<div className="hero">
				<img src={heroImg} className="base" width="170" height="179" alt="" />
				<img src={reactLogo} className="framework" alt="React logo" />
				<img src={viteLogo} className="vite" alt="Vite logo" />
			</div>
			<div>
				<h1>{title}</h1>
				<p>
					Edit <code>{path}</code> and save to test <code>HMR</code>
				</p>
			</div>
		</>
	)
}
