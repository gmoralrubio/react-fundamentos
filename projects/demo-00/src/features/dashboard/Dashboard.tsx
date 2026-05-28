import { Timer } from './components/Timer'
import './Dashboard.css'

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Timer />
    </div>
  )
}
