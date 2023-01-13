import express from 'express'
import {
  getUser,
  addUser,
  signoutUser
} from '../controllers/userController'
import { refreshUser } from '../services/authService'

const userRoutes = express.Router()

userRoutes.post('/signin', getUser)
userRoutes.post('/signup', addUser)
userRoutes.post('/signout', signoutUser)
userRoutes.post('/refresh', refreshUser)
// authService(['Admin', 'Guest'])

export default userRoutes
