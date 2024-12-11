/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken'
import config from '../../config'
import { User } from './user.model'
import bcrypt from 'bcrypt'
import { TUser } from './user.interface'

const generateToken = (id: string) => {
    return jwt.sign({ id }, config.jwt_secret!, { expiresIn: '30d' })
}

const registerUserIntoDB = async (payload: TUser) => {
    const { name, email, password, photoUrl } = payload

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        throw new Error('User already exists')
    }

    const hashedPassword = await bcrypt.hash(
        password,
        Number(config.bcrypt_salt_rounds),
    )

    const result = await User.create({
        name,
        email,
        password: hashedPassword,
        photoUrl,
    })

    return result
}

const loginUserFromDB = async (payload: Partial<TUser>) => {
    const { email, password } = payload

    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password as string, user.password))) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user.id),
        }
    } else {
        throw new Error('Invalid email or password')
    }
}

export const UserServices = {
    registerUserIntoDB,
    loginUserFromDB,
}