export interface Product {
	id: string
	name: string
	model: string
	vehicleClass: string
	manufacturer: string
	length: number
	costs: number
	crew: number
	passengers: number
	maxSpeed: number
	cargoCapacity: number
	consumables: string; // Changed to string as per the patch intent
}

// DTO -> Datos que tenemos que transmitir al backend en los distintos procesos de creación o actualización de productos. En este caso, el DTO es igual a la entidad, pero en otros casos podrían ser diferentes.

// Excluimos el id, ya que este lo pondrá el backend
export type ProductCreateDTO = Omit<Product, 'id'>

// Como vamos a actualizar solo una parte (PATCH), definimos un Partial
export type ProductUpdateDTO = Partial<ProductCreateDTO>
