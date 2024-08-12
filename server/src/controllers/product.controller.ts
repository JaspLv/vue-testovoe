import { Request, Response } from 'express'
import productService from '../services/product.service'

class ProductController {
	async getAll(req: Request, res: Response) {
		try {
			const products = productService.getAllProducts()
			res.status(200).json({
				products,
			})
		} catch (err) {
			res.status(500).json({
				message: 'Internal Server Error!',
			})
		}
	}

	async getById(req: Request, res: Response) {
		try {
			const product = productService.getProductById(parseInt(req.params.id))
			if (!product) {
				return res.status(404).json({
					message: 'Product not found!',
				})
			}
			res.status(200).json({
				product,
			})
		} catch (err) {
			res.status(500).json({
				message: 'Internal Server Error!',
			})
		}
	}
}

export default new ProductController()
