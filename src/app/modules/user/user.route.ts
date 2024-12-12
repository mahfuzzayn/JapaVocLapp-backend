import express from 'express'
import { UserControllers } from './user.controller'
import verifyToken from '../../middlewares/authMiddleware'

const router = express.Router()

router.get('/', UserControllers.getAllUsers)

router.post('/register', UserControllers.registerUser)

router.post('/login', UserControllers.loginUser)

router.patch('/:userId', UserControllers.updateUserRole)

router.get('/verify-token', verifyToken, UserControllers.verifyUserAuth)

export const UserRoutes = router
