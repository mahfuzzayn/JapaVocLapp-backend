import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

// parser
app.use(express.json())
app.use(cors())

const test = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Japanese Vocabulary Learning Application"
    })
}

app.get('/', test)

export default app
