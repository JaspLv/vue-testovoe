import { ProductType } from '@/types/product.types'
import Link from 'next/link'

type ProductCardProps = {
	product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<Link
			className='group cursor-pointer lg:hover:border-primary border-[2px] border-background w-full h-full bg-background rounded-[16px] flex flex-col md:p-5 p-3 gap-3'
			href={`products/${product.id}`}
		>
			<div className='text-[24px] font-bold group-hover:text-primary'>
				{product.name}
			</div>
			<div className='text-[18px] font-medium'>{product.description}</div>
			<div className='text-[20px] font-semibold flex gap-1'>
				<span>{product.price}</span>
				<span>{product.currency}</span>
			</div>
		</Link>
	)
}

export default ProductCard
