import express from 'express'
import dotenv from 'dotenv'
import {connectDB} from './config/db.js'
import trackerRoutes from './routes/tracker.route.js'
import registrationRoutes from './routes/registration.route.js'
import validationRegistration from './middleware/validation.js'
import cors from 'cors'

const app = express()

dotenv.config();
connectDB();
// middlewares
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use("/api/v1/registration",registrationRoutes)
app.use("/api/v1/trackers",trackerRoutes)
// const PORT = process.env.PORT || 3000

// connection establish with server
// app.listen(PORT,() => {
   
//     console.log("server started successfully on http://localhost:3000")
// })