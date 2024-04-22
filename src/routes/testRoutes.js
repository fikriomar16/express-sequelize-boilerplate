import { Router } from 'express'
import { testGetUser } from '#controllers/testController.js'

const testRoutes = Router()
testRoutes.get('/users', testGetUser)

export default testRoutes