import { useState } from 'react'
import './ProductForm.css'
import type { ProductCreateDTO } from '@features/Products/entities/Product'

interface Props {
  onAdd: (data: ProductCreateDTO) => void
}

export const ProductForm: React.FC<Props> = ({ onAdd }) => {
  const initialProduct: ProductCreateDTO = {
    name: '',
    vehicleClass: '',
    model: '',
    cargoCapacity: 0,
    consumables: '',
    crew: 0,
    length: 0,
    manufacturer: '',
    passengers: 0,
    costs: 0,
    maxSpeed: 0,
  }

  const [product, setProduct] = useState<ProductCreateDTO>(initialProduct)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Producto creado', product)
    onAdd(product)
  }

  return (
    <div>
      <details>
        <summary>Add product</summary>
        <div className="product-form">
          <h3>Product form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product?.name || ''}
              onChange={handleChange}
            />
            <label htmlFor="vehicleClass">Vehicle class</label>
            <input
              type="text"
              id="vehicleClass"
              name="vehicleClass"
              value={product?.vehicleClass || ''}
              onChange={handleChange}
            />
            <button type="submit">Crear producto</button>
          </form>
        </div>
      </details>
    </div>
  )
}
