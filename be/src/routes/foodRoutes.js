import express from 'express';
import { searchFoods, getIngredients, getFlavors, getTags } from '../controllers/foodController.js';

const router = express.Router();

// Route tìm kiếm món ăn
router.get('/search', searchFoods);

// Route lấy danh sách nguyên liệu
router.get('/ingredients', getIngredients);

// Route lấy danh sách gia vị
router.get('/flavors', getFlavors);

// Route lấy danh sách tags
router.get('/tags', getTags);

export default router;
