import { Schema, model } from "mongoose" 

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    commentedOnThePost: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    commentedByTheUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    likes:[
        {
            type: String,
        }
    ],
    replies: [
        {
            comment:{
                type: String,
                lowercase: true,
                trim: true,
            },
            commentedByTheUser: { 
                type: Schema.Types.ObjectId,
                ref: "User"
            },
            repliedToTheComment: {
                type: Schema.Types.ObjectId,
                ref: "Comment"
            },
            likes: [
                {
                    type: String,
                }
            ],
            creaated_At: {
                type: Date,
                default: Date.now()
            },
            updated_At:{
                type: Date,
                default: Date.now()
            }
        }
    ]
},{timestamps: true})

const Comment = model('Comment', commentSchema)
export default Comment