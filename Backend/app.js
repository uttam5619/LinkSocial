import cookieParser from 'cookie-parser'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

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



export default app