import express from 'express'
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/', UserControllers.getAllUsers);

router.post('/register', UserControllers.registerUser);

router.post('/login', UserControllers.loginUser);

router.patch('/:userId', UserControllers.updateUserRole);

export const UserRoutes = router;