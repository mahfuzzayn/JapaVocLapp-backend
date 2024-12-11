import { Request, Response } from 'express'
import { UserServices } from './user.service'

const registerUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.registerUserIntoDB(req.body)

        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: 'Failed to create an user',
            error: error,
        })
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.loginUserFromDB(req.body)

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to login user',
            error: error,
        })
    }
}

export const UserControllers = {
    registerUser,
    loginUser,
}
