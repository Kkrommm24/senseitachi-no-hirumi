import express from 'express';
import { saveComment } from '../controllers/commentController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route save comment by userId
router.post('/foods/:foodId/comments', authMiddleware, saveComment);

export default router;
