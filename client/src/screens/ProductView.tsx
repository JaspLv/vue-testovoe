import { ProductType } from '@/types/product.types'

type ProductViewProps = {
	product: ProductType
}

const ProductView = ({ product }: ProductViewProps) => {
	return (
		<div className='w-[50%] mx-auto mt-4 font-medium'>
			<p>{product.name}</p>
			<p>{product.description}</p>
			<p className='font-semibold'>
				Price: {product.price} {product.currency}
			</p>
			<p className='mt-4'>ID: {product.id}</p>
		</div>
	)
}

export default ProductView
