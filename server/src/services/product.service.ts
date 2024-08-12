import { ProductType } from '../types/products.type'

class ProductsService {
	private static instance: ProductsService
	private products: ProductType[] = [
		{
			id: 1,
			name: 'Tv',
			description: 'tv good!',
			price: 1000,
			currency: 'USD',
		},
		{
			id: 2,
			name: 'Phone',
			description: 'Good phone',
			price: 100,
			currency: 'USD',
		},
		{
			id: 3,
			name: 'Monitor',
			description: 'Monitor',
			price: 190,
			currency: 'USD',
		},
	]

	constructor() {}

	public static getInstance(): ProductsService {
		if (!ProductsService.instance) {
			ProductsService.instance = new ProductsService()
		}

		return ProductsService.instance
	}

	public getAllProducts(): ProductType[] {
		return this.products
	}

	public getProductById(id: number): ProductType | undefined {
		return this.products.find(product => product.id === id)
	}
}

export default ProductsService.getInstance()
