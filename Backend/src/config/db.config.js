import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    .then((e)=>{
        console.log(`connection established with database ${e.connection.host}`)
    }).catch((err)=>{
        console.log(`failed to establish connection with database ${err.message}`)
        process.exit(1)
    })
}

export default connectDB