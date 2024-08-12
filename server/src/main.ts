import cors from 'cors'
import express from 'express'
import productRouter from './routes/product.routes'

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productRouter)

app
	.listen(PORT, () => console.log(`Server listening on ${PORT}`))
	.on('error', (err: any) => {
		if (err.code === 'EADDRINUSE') {
			console.log('Error: address already in use')
		} else {
			console.log(err)
		}
	})
