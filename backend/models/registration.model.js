import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
         required: true
       
    },
},
   {timestamps: true}
);
const registration = mongoose.model("registration", registrationSchema);
export default registration;