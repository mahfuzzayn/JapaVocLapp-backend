import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/users', UserRoutes)

const test = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Welcome to Japanese Vocabulary Learning Application',
    })
}

app.get('/', test)

export default app
