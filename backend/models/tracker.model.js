import mongoose from 'mongoose'

const CATEGORIES = ["personal","work","health","study"];
const trackerSchema = new mongoose.Schema({
    taskName: {
        type:String,
        required: true
    },
    completed: {
        type: Boolean,
        default:false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "registrations",
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: CATEGORIES,
        required: true
    }
    
}, {timestamps: true})

const tracker = mongoose.model("tracker",trackerSchema)
export default tracker;