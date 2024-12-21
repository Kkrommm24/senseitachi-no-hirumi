import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch complete user data
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { 
        id: true,
        isAdmin: true
      }
    });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Set complete user object
    req.user = user;
    req.userId = user.id;
    console.log('User set in middleware:', req.user);
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    return res.status(401).json({ message: 'Invalid token' });
  }
};