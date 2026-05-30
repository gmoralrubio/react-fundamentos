import logo from '@assets/react.svg'

interface Props {
  title: string
}

export const Logos: React.FC<Props> = ({ title }) => {
  return (
    <>
      <div className="flex gap-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <img
          src={logo}
          alt={title}
        />
      </div>
    </>
  )
}
