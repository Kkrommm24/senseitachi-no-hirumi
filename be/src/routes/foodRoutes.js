import express from 'express';
import { searchFoods, getIngredients, getFlavors, getTags, getAllFoods } from '../controllers/foodController.js';

const router = express.Router();

// Route tìm kiếm món ăn
router.get('/search', searchFoods);

// Route lấy danh sách nguyên liệu
router.get('/ingredients', getIngredients);

// Route lấy danh sách gia vị
router.get('/flavors', getFlavors);

// Route lấy danh sách tags
router.get('/tags', getTags);

// Route lấy tất cả các món ăn
router.get('/all-foods', getAllFoods);

export default router;
