import { Button } from '@shared/components/Button'

export const PanicButton: React.FC = () => {
  const handleClick = () => {
    console.log('Click')
  }

  return (
    <Button
      label="Panic Button"
      onClick={handleClick}
      title="Panic"
      className="bg-red-700 hover:bg-red-800"
    />
  )
}
