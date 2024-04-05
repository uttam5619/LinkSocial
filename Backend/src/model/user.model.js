import { Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema= new Schema({
    name:{
        type: String,
        required: [true, `name is required`],
        trim: true,
        lowercase: true,
        minLength: [3,`the name should contain atleast 3 characters`],
        maxLength: [60,`the name should not contain more than 60 characters`],
    },
    username: {
        type: String,
        required: [true, `username is required`],
        unique: true,
        trim: true,
        index: true,
        lowercase: true,
        minLength: [3,`the name should contain atleast 3 characters`],
        maxLength: [60,`the name should not contain more than 60 characters`],
    },
    email:{
        type: String,
        required: [true, `email is required`],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, `password is required`],
        trim: true,
        lowercase: true,
        select: false,
        minLength: [6,`password should contain atleast 6 characters`],
        maxLength: [100,`password should not contain more than 100 characters`]
    },
    phone: {
        type: String,
        required: [true, `phone number is required`]
    },
    avatar:{
        public_id:{
            type: String, // cloudinary url.
            required: true
        },
        secure_url:{
            type:String, //cloudinary url.
            required:true
        }
    }
},{ timestamps:true})

userSchema.save('pre', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt(this.password, 10)
    next()
})

userSchema.method ={
    generateAccessToken: async function (){
        return await jwt.sign(
            {_id:this._id, email:this.email, username:this.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'5m'}
        )
    },
    generateRefreshToken: async function (){
        return await jwt.sign(
            {_id:this._id, email:this.email, username:this.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'10d'}
        )
    }
}