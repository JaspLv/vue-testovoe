import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home page',
}
export default function Home() {
	return (
		<div className='flex items-center justify-center h-full'>
			<h1 className='lg:text-[36px] md:text-[24px] text-[18px] font-semibold'>
				Welcome
			</h1>
		</div>
	)
}
