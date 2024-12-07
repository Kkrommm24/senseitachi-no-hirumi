import express from 'express';
import { saveFavoriteTag } from '../controllers/tagController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route save favorite tag by userId
router.post('/tags/favorite-tags', authMiddleware, saveFavoriteTag);

export default router;
