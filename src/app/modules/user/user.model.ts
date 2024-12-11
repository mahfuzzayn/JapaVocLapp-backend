import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'

const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            require: true,
        },
        photoUrl: {
            type: String,
        },
        password: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    },
)

export const User = model<TUser>('User', userSchema)
