import express from 'express';
import { getFoodDetails } from '../controllers/getfooddetailsController.js';

const router = express.Router();

// Route tìm kiếm món ăn
router.get('/get-food-detail', getFoodDetails);

export default router;