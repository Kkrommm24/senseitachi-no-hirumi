import express from 'express';
import { login, signup, logout } from '../controllers/authControllers.js';

const router = express.Router();

router.post('/auth/signup', signup);
router.post('/auth/login', login);
router.post('/logout', logout);

export default router;
