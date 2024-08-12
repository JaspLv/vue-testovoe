type PageTitleProps = {
	text: string
}

const PageTitle = ({ text }: PageTitleProps) => {
	return <h1 className='title text-center'>{text}</h1>
}

export default PageTitle
