import { Schema, model } from 'mongoose'

const emailVerificationSchema =Schema({
    token: {
        type: String,
    }
},{timestamps:true})

const emailVerification = model('emailVerification', emailVerificationSchema)
export default emailVerification