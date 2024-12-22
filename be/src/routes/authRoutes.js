import express from 'express';
import { login, signup, logout, forgotPassword, resetPassword } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.post('/auth/forgot-password', forgotPassword);
router.post('/auth/reset-password/:token', resetPassword);
router.post('/logout', logout);

export default router;
