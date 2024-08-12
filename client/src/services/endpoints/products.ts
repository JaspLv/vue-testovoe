import { api } from '@/services/api'

class ProductsApi {
	public loadProducts = async () => {
		const {
			data: { products },
		} = await api.get('products')

		return products
	}

	public loadProduct = async (id: string) => {
		const {
			data: { product },
		} = await api.get(`products/${encodeURIComponent(id)}`)

		return product
	}
}

export default new ProductsApi()
