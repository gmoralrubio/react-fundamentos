interface Props {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
  return <div className="rounded border border-gray-300 p-4">{children}</div>
}
