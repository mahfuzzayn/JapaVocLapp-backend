/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import config from '../config'
import jwt, { JwtPayload } from 'jsonwebtoken'

declare module 'express-serve-static-core' {
    interface Request {
        user?: string | JwtPayload
    }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
        res.status(401).json({ message: 'Access denied. Token missing.' })
        return
    }

    try {
        const decoded = jwt.verify(token, config.jwt_secret!)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token.' })
    }
}

export default verifyToken
