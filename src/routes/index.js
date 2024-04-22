import { Router } from 'express'
import dotenv from 'dotenv'
import testRoutes from './testRoutes.js'

dotenv.config()
const routes = Router()

routes.get('/', (req, res) => {
	res.json({
		status: 'success',
		app: process.env.APP_NAME ?? process.env.npm_package_description,
		message: 'API Connected Successfully......'
	})
})
routes.use('/test', testRoutes)

export default routes