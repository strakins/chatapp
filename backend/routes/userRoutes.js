import express from 'express';
import verifyUser from '../middleware/verifyUser.js';
import { getUsersForSidebar } from '../controllers/userController.js';

const router  = express.Router();

router.get("/", verifyUser,  getUsersForSidebar)

export default router;

