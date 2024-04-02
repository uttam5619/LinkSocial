import { config } from 'dotenv'
config()
import app from './app'

const PORT= process.env.PORT || 6072




app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`)
})

