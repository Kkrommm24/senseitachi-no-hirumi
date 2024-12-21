import express from 'express';
import { searchFoods, getIngredients, getFlavors, getTags, getAllFoods, addFood, getAdminOrUserFoods, updateFood, deleteFood } from '../controllers/foodController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

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

// Route thêm món ăn
router.post('/add-food', authMiddleware, addFood);

router.get('/get-created-foods', authMiddleware, getAdminOrUserFoods);

router.put('/update-food', authMiddleware, updateFood);

router.delete('/delete-food', authMiddleware, deleteFood);

export default router;
