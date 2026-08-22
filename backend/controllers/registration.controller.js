import registrations from '../models/registration.model.js';
import trackers from '../models/tracker.model.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req, res) => {
     try{
      const {name, email, password, confirmPassword} = req.body;
      const existingUser = await registrations.findOne({email})
      if(existingUser) {
         return res.status(409).json({
            message:"Email already registered"
         })
      }
      if(password !== confirmPassword) return  res.status(400).json({message: 'Password and confirm password does not match'})
        const hash= await bcrypt.hash(password, 10);
       const user = await registrations.create({name, email, password: hash});
    res.status(201).json(user)
    console.log(user)
   }catch(error){
      console.log(error)
    res.status(500).json({error})
   }
}
export const getRegisterUser = async(req, res) => {
     try{
       const allUsers = await registrations.find();
       if(!allUsers) return res.status(404).json({message: 'User not found'})
       res.status(200).json(allUsers)
    }
    catch(error){
     res.status(500).json({error})
    }
}



export const login = async (req, res) =>{
   const {email, password} = req.body;
   try{
      const user = await registrations.findOne({email});
      if(!user) return res.status(401).json({message: 'Invalid credentials'})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({message: 'Invalid credentials'})
         const token = jwt.sign(
      {id: user._id},
      process.env.JWT_SECRET,
      {
         expiresIn: '7d'
      }
    )
   
   
    // Get user's tasks
    const tasks = await trackers.find({
      user: user._id
    });
      res.status(200).json({
         success: true,
         message: 'User logged in successfully',
         token,
         user:{
            _id: user._id,
            name: user.name,
            email: user.email
         },
           tasks
      })
   }
   catch(error){
      console.log(error);
   }
}

export const getProfile = async (req,res) => {
   const user = await registrations.findById(req.user.id).select('-password');
   console.log(user);
    res.json({
        success: true,
        user
    });
} 