import express from 'express';
import { getFoodDetails } from '../controllers/getfooddetailsController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route tìm kiếm món ăn
router.get('/get-food-detail',authMiddleware, getFoodDetails);

export default router;