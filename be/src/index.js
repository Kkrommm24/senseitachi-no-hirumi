import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import foodRoutes from './routes/foodRoutes.js';
import searchbytagRoutes from './routes/searchbytagRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import authRoutes from './routes/authRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import getfooddetailsRoutes from './routes/getfooddetailsRoutes.js';
import tagRoutes from './routes/tagRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const httpServer = createServer(app);

const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', foodRoutes);
app.use('/api', searchbytagRoutes);
app.use('/api', favoriteRoutes);
app.use('/api', authRoutes);
app.use('/api', commentRoutes);
app.use('/api', getfooddetailsRoutes);
app.use('/api', tagRoutes);
app.use('/api', uploadRoutes);
app.use('/api', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
