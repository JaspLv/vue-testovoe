import PageTitle from '@/components/common/PageTitle'
import ProductView from '@/screens/ProductView'
import ProductsApi from '@/services/endpoints/products'
import { ProductType } from '@/types/product.types'
import { Metadata } from 'next'

export async function generateMetadata({
	params,
}: {
	params: { productId: string }
}): Promise<Metadata> {
	const product = await ProductsApi.loadProduct(params.productId)
	return { title: `Product ${product.name}`, description: product.description }
}
export async function generateStaticParams() {
	try {
		const products = await ProductsApi.loadProducts()
		return products.map((product: ProductType) => ({
			productId: product.id.toString(),
		}))
	} catch (error) {
		console.error('Error loading products for static params', error)
		return []
	}
}

export const revalidate = 60

export default async function ProductPage({
	params,
}: {
	params: { productId: string }
}) {
	try {
		const product = await ProductsApi.loadProduct(params.productId)

		return (
			<div>
				<PageTitle text={`Product ${product.name}`} />
				<ProductView product={product} />
			</div>
		)
	} catch (error) {
		console.error(`Error loading product for ID: ${params.productId}`, error)
		return (
			<div>
				<PageTitle text='Product Not Found' />
				<p>Unable to load product details. Please try again later.</p>
			</div>
		)
	}
}
