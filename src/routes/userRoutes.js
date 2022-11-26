import { Router } from 'express'

import UserController from '../controllers/UserController.js'

const router = Router()

router
  .post('/', UserController.createUser)
  .post('/login', UserController.login)
  .get('/recover/:email', UserController.recoverPassword)
  .get('/users', UserController.indexUser)
  .get('/users/:id', UserController.showUser)
  .put('/:id', UserController.updateUser)
  .delete('/users', UserController.deleteUser)

export default router