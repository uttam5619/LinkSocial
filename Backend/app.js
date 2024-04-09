import cookieParser from 'cookie-parser'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import userRoutes from './src/routes/v1/user.route.js'
import authRouter from './src/routes/v1/auth.route.js'

const app = express()

//security packages
app.use(helmet())

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({ extended:true}))

app.use(morgan('dev'))


app.use('/api/v1/user',userRoutes)
app.usr('api/v1/auth', authRouter)



export default app