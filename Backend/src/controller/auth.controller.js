import User from "../model/user.model.js"

const cookieOptions ={
    httpOnly: true,
    secure: true,

}

const signUp= async (req, res, next)=>{
    const { name, username, email, password } =req.body
    if( !name|| !username|| !email|| !password){
        next('please provide the mandatory details')
        return
    }
    try{
        const doesUserExist = await User.findOne({email})
        if(doesUserExist){
            return res.status(400).json({success: false, message:`an user with this email is already registered`})
        }
        const user= await User.create({
            username, name, email, password
        })
        if(!user){
            return res.status(400).json({success: false, message:`server failed to register the user with the given credentials`})
        }
        const registeredUser = await User.findById(user._id).select('-password')
        registeredUser.save()
        const accessToken = registeredUser.generateAccessToken()
        const refreshToken = registeredUser.generateRefreshToken()
        res.cookie('accessToken',accessToken, cookieOptions)
        res.cookie('refreshToken',refreshToken, cookieOptions)
        res.status(201).json({success: true, message:`user registered successfully`,data:registeredUser})
    }catch(err){

    }


}


const signIn = (req, res)=>{



}


const logOut = (req, res)=>{



}

export {
    signUp,
    signIn,
    logOut
}