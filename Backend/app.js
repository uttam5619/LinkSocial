import cookieParser from 'cookie-parser'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extented: true}))
app.use(bodyParser.json())
app.use(express.json())




export default app