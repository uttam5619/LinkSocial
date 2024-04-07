import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    description: {
        type: String,
        lowercase: true,
    },
    image:{
        public_id:{
            type: String, //cloudinary url
        },
        secure_url: {
            type: String, //cloudinary url
        }
    },
    likes: [
        {
            type: String,
        }
    ],
    commentedBy: [
        {
            type:Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    likedBy: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},{timestamps:true})

const Post= model('Post', postSchema)
export default Post