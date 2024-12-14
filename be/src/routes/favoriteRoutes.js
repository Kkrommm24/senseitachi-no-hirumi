import express from 'express';
import { getFavoriteFoodById, addToFavorite, removeFromFavorite } from '../controllers/favoriteController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route get favorite food by userId
router.get('/favorites', authMiddleware, getFavoriteFoodById);

// Route to add favorite food
router.post('/add-favorites', authMiddleware, addToFavorite);

// Route to remove favorite food
router.delete('/favorites/:foodId', authMiddleware, removeFromFavorite);

export default router;
