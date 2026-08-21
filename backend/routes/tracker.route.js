import express from 'express'
import auth from '../middleware/myAuth.js'
import {addTask,getTasks,getTask,deleteTask,updateTask,deleteAllTask,deleteAllCompletedTask,deleteAllPendingTask} from '../controllers/tracker.controllers.js'
const router = express.Router();

// get all the tasks
router.get('/',auth,getTasks)

// get task by id
router.get('/:id',getTask)

//add new task in the tracker
router.post('/add',auth,addTask)


// update task in the tracker for(text/completed)
router.put('/:id',updateTask)

// delete all task
router.delete('/deleteAll', deleteAllTask);

// completed task delete in the tracker
router.delete('/completedTask',deleteAllCompletedTask)

// pending task delete in the tracker 
router.delete('/pending',deleteAllPendingTask)
// task delete in the tracker
router.delete('/:id',deleteTask)

export default router;

