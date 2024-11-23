import express from 'express';
import { searchFoodsByTag } from '../controllers/searchbytagControllers.js';

const router = express.Router();

// Route tìm kiếm món ăn
router.get('/searchByTag', searchFoodsByTag);

export default router;