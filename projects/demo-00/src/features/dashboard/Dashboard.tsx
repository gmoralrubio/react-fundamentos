import { RenderCount } from './components/RenderCount/RenderCount'
import { Timer } from './components/Timer/Timer'
import './Dashboard.css'

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Timer />
      <RenderCount />
    </div>
  )
}
