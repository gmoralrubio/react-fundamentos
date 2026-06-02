import type { Product } from '@features/Products/entities/Product'
import PRODUCTS from '../data/products.json'

const products: Product[] = PRODUCTS

const getProducts = (): Product[] => {
	return products
}

const getProductById = (id: string) => {
	const product = products.find((product) => product.id === id)
	return product
}

export const productRepository = {
	getProducts,
	getProductById,
}
