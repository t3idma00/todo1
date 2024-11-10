import { pool } from '../helpers/db.js'
import { Router } from 'express'
import { emptyOrRows } from '../helpers/utils.js';
import { auth } from '../helpers/auth.js';
import {
    getTasks,
    postTask,
    deleteTaskById,
  } from "../controllers/taskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/create", auth, postTask);
router.delete("/delete/:id", deleteTaskById);


export default router;