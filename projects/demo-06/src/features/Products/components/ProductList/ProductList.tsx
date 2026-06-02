import type {
  Product,
  ProductCreateDTO,
} from '@features/Products/entities/Product'
import { productRepository } from '@features/Products/services/productsRepository'
import { useEffect, useState } from 'react'
import './ProductList.css'
import { ProductItem } from '@features/Products/components/ProductItem/ProductItem'
import { ProductForm } from '@features/Products/components/ProductForm/ProductForm'

// Este componente actua como contendor (Lógica)

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const products: Product[] = productRepository.getProducts()
    setProducts(products)
  }, [])

  // Función para eliminar un producto
  const deleteProduct = (id: string) => {
    const updatedProducts = products?.filter((product) => product.id !== id)
    setProducts(updatedProducts)
  }

  const addProduct = (product: ProductCreateDTO) => {
    const newProduct: Product = {
      id: crypto.randomUUID().slice(0, 4),
      ...product,
    }
    setProducts([newProduct, ...products])
  }

  return (
    <>
      <ProductForm onAdd={addProduct} />

      <section className="product-list">
        <h3>Product List</h3>
        {/* Este componente actua como presentador (UI) */}
        <ul>
          {products?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              // Pasamos la funcion
              onDelete={deleteProduct}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
