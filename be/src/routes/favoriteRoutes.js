import express from 'express';
import { getFavoriteFoodById } from '../controllers/favoriteController.js';

const route = express.Router();

// Route get favorite food by userId
route.get('/favorites/:userId', getFavoriteFoodById);

export default route;
