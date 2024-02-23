import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { authDb } from '#services/connectionService.js'
import { checkDir } from '#services/directoryService.js'

(async () => {
	await authDb()
	await checkDir()
})()

console.log(`[RUNNING]`)