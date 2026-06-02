import type { Product } from '@features/Products/entities/Product'
import './ProductItem.css'

// Este componente actua como presentador

interface Props {
  product: Product
  // Recibimos la funcion en las props
  onDelete: (id: string) => void
}

export const ProductItem: React.FC<Props> = ({ product, onDelete }) => {
  const handleDelete = () => onDelete(product.id)

  return (
    <li className="product-item">
      <h3>{product.name}</h3>
      <p>{product.vehicleClass}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={handleDelete}
      >
        Borrar
      </button>
    </li>
  )
}
