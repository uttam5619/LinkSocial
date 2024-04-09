import express from 'express'
import { updateUser, getUser, deleteUser, getUsers } from '../../controller/user.controller.js'
const userRoutes = express.Router()


userRoutes.put('/update/:id',updateUser)
userRoutes.get('/:id',getUser)
userRoutes.get('/',getUsers)
userRoutes.delete('/delete/:id',deleteUser)

export default userRoutes