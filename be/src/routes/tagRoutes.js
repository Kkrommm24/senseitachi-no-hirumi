import express from 'express';
import { saveFavoriteTag } from '../controllers/tagController.js';
import { getFavoriteTag } from '../controllers/tagController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route save favorite tag by userId
router.post('/tags/favorite-tags', authMiddleware, saveFavoriteTag);

// Route get favorite tag
router.get('/tags/favorite-tags', authMiddleware, getFavoriteTag);

export default router;
