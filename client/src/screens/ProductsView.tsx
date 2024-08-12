import ProductCard from '@/components/product/ProductCard'
import { ProductType } from '@/types/product.types'

type ProductsViewProps = {
	products: ProductType[]
}

const ProductsView = ({ products }: ProductsViewProps) => {
	return (
		<div className='w-full grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-6 mt-4'>
			{products.map(product => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	)
}

export default ProductsView
