import { config } from 'dotenv'
config()
import app from './app.js'
import connectDB from './src/config/db.config.js'

const PORT= process.env.PORT || 6072

connectDB()

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})