import { Request, Response } from 'express'
import { UserServices } from './user.service'

const verifyUserAuth = (req: Request, res: Response) => {
    res.status(200).json({
        valid: true,
    })
}

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getAllUsersFromDB()

        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            message: 'Failed to retrieve all users',
            error: error,
        })
    }
}

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

const updateUserRole = async (req: Request, res: Response) => {
    const { userId } = req.params

    try {
        const result = await UserServices.updateUserRoleIntoDB(userId, req.body)

        res.status(200).json({
            success: true,
            message: 'User role updated in successfully',
            data: result,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update user role',
            error: error,
        })
    }
}

export const UserControllers = {
    verifyUserAuth,
    getAllUsers,
    registerUser,
    loginUser,
    updateUserRole,
}
