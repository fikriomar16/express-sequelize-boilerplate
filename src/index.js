import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { authDb } from '#services/connectionService.js'
import { checkDir } from '#services/directoryService.js'
import routes from '#routes/index.js'

dotenv.config()

const app = express()
const APP_HOST = process.env?.APP_HOST ?? `http://127.0.0.1`
const APP_PORT = process.env?.APP_PORT ?? 5000

app.use(cors({ credentials: true, origin: [`${APP_HOST}:${APP_PORT}`] }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization")
	next()
})
app.use('/api', routes)

const server = app.listen(APP_PORT, async () => {
	await authDb()
	await checkDir()
	console.log(`[RUNNING] 🚀 Running at ${APP_HOST}:${APP_PORT}`)
})

app.server = server

export default app