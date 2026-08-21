import express from 'express'
import {register, getRegisterUser,login,getProfile} from '../controllers/registration.controller.js'
import validationRegistration from '../middleware/validation.js'
import myAuth from '../middleware/myAuth.js'

const router = express.Router();

// register
router.post('/register',validationRegistration,register)
router.get('/profile',myAuth,getProfile)

// login
router.post('/login',login)
router.get('/',getRegisterUser)






export default router

