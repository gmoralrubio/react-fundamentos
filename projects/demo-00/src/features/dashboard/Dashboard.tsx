import { Focus } from './components/Focus/Focus'
import { RenderCount } from './components/RenderCount/RenderCount'
import { Timer } from './components/Timer/Timer'
import './Dashboard.css'

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      {/* Ejemplo useEffect */}
      <Timer />

      {/* Ejemplo useRef */}
      <RenderCount />

      {/* Ejmplo useRef */}
      <Focus />
    </div>
  )
}
