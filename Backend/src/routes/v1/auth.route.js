import express from 'express'
import { logOut, signIn, signUp } from '../../controller/auth.controller'
const authRouter = express()


authRouter.post('/signUp', signUp)
authRouter.post('/signIn',signIn)
authRouter.post('/logout', logOut)

export default authRouter