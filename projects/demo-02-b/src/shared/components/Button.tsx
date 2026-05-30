import { twMerge } from 'tailwind-merge'

interface Props {
  className?: string
  label: string
  // Tipamos el onclick
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  /**
    [key: string]: unknown -> es un index signature. Permite que el componente Button acepte cualquier prop adicional de tipo string (como id, disabled, title, aria-label, etc.) con un valor de tipo unknown. Gracias a esto y a la línea {...restOfProps}, esas props extras se propagan automáticamente al elemento <button>, haciendo que el componente sea flexible sin necesidad de declarar cada prop del DOM manualmente.
   */
  [key: string]: unknown
}

export const Button: React.FC<Props> = ({
  className,
  label,
  onClick,
  ...restOfProps
}) => {
  return (
    <button
      className={twMerge(
        'cursor-pointer rounded bg-gray-700 px-4 py-2 text-xl text-white hover:bg-gray-800',
        className
      )}
      onClick={onClick}
      {...restOfProps}
    >
      {label}
    </button>
  )
}
