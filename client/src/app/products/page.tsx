import PageTitle from '@/components/common/PageTitle'
import ProductsView from '@/screens/ProductsView'
import ProductsApi from '@/services/endpoints/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Products page',
}

export const revalidate = 200

export default async function ProductsPage() {
	try {
		const products = await ProductsApi.loadProducts()

		return (
			<div>
				<PageTitle text='Products Page' />
				<ProductsView products={products} />
			</div>
		)
	} catch (error) {
		console.error('Error loading products', error)
		return (
			<div>
				<PageTitle text='Error Loading Products' />
				<p>Unable to load products. Please try again later.</p>
			</div>
		)
	}
}
