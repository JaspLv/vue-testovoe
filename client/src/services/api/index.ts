import axios, { AxiosInstance } from 'axios'

export const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

class Api {
	protected instance: AxiosInstance

	public constructor() {
		this.instance = axios.create({
			baseURL: API_URL,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	public getInstance = () => this.instance
}

export const req = new Api()
export const api = req.getInstance()
