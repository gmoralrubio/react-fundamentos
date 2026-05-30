import type { MenuOptions } from '@App'

interface Props {
  menuOptions: MenuOptions[]
}

export const Menu: React.FC<Props> = ({ menuOptions }) => {
  return (
    <nav className="flex gap-2">
      {menuOptions.map((option: MenuOptions) => (
        <a
          key={option.path}
          href={option.path}
        >
          {option.label}
        </a>
      ))}
    </nav>
  )
}
