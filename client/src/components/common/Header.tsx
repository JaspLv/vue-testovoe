'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
	const pathname = usePathname()
	return (
		<header className='bg-primary w-full px-4 py-8'>
			<div className='container container-main '>
				<ul className='flex justify-center gap-8 '>
					<li>
						<Link
							href={'/'}
							className={`text-white hover:text-black ${
								pathname === '/' ? 'text-black' : ''
							}`}
						>
							Home
						</Link>
					</li>

					<li>
						<Link
							href={'/products'}
							className={`text-white hover:text-black ${
								pathname === '/products' ? 'text-black' : ''
							}`}
						>
							Products
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
