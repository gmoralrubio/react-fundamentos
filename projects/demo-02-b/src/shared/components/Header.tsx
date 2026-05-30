interface Props {
  children: React.ReactNode
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex items-center justify-between bg-gray-50 p-4">
      {children}
    </header>
  )
}
