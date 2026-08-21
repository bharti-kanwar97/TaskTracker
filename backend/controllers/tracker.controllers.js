import trackers from '../models/tracker.model.js'
export const addTask = async (req,res) => {
        console.log("BODY:", req.body);
    console.log("USER:", req.user);
    try {
        const addTask = await trackers.create({
            taskName:req.body.taskName,
            dueDate:req.body.dueDate,
            category:req.body.category,
            completed:false,
            user:req.user.id
        })
        console.log(addTask)
        res.status(201).json(addTask)
    }
    catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}

// GET ALL TASKS
export const getTasks = async (req, res) => {
    try{
         const allTask = await trackers.find({user: req.user.id})
         if(!allTask) return res.status(404).json({message: 'Task not found'})
         console.log(allTask)
         res.status(200).json(allTask)
        }
    catch(error){
        console.log(error)
          res.status(500).json({error})
    }
}

// GET A TASK BY ID
export const getTask = async (req, res) => {
    try{
         const task = await trackers.findById(req.params.id)
         if(!task) return res.status(404).json({message: 'Task not found'})
           console.log(task)
        res.status(200).json({task})
        }
    catch(error){
        console.log(error)
      res.status(500).json({error})
    }
}

// delete a task
export const deleteTask = async (req, res) => {
    try{
       const deleteTask = await trackers.findByIdAndDelete(req.params.id)
       console.log(deleteTask)
       res.status(200).json({message:"successfully deleted"}) 
    }
    catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}
// UPDATE A TASK
export const updateTask = async (req, res) => {
    try{
       const updateTask = await trackers.findByIdAndUpdate(req.params.id,req.body, {new: true})
       console.log(updateTask)
       res.status(200).json(updateTask) 
    }
    catch(error){
        console.log(error)
         res.status(500).json({error})
    }
}

// DELETE ALL TASK
export const deleteAllTask = async (req, res) => {
    try{
      await trackers.deleteMany({})
      res.status(200).json({message: "successfully deleted all the tasks"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}
// DELETE ALL COMPLETED TASK
export const deleteAllCompletedTask = async (req, res) => {
    console.log("deleteAllCompletedTask called");
    try{
      await trackers.deleteMany({completed: true})
      res.status(200).json({message: "successfully deleted all the tasks"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}

// DELETE ALL PENDING TASKS
export const deleteAllPendingTask = async (req, res) => {
    console.log("deleteAllPending Task called");
    try{
      await trackers.deleteMany({completed: false})
      res.status(200).json({message: "successfully deleted all the tasks"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error})
    }
}