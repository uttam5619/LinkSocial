import { Schema, model } from 'mongoose'

const requestSchema = new Schema({
    requestedTo: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    requestedFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    requestStatus: {
        type: String,
        default:'pending'
    }
},{timestamps: true})

const FriendRequest = model('FriendRequest', requestSchema)
export default FriendRequest