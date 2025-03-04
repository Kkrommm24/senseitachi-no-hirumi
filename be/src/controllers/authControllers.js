import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { addToken, removeToken } from '../tokenStore.js';
import { sendResetPasswordEmail } from '../service/mailService.js';

const prisma = new PrismaClient();

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'Email aready exist!' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        isAdmin: false,
      },
    });

    return res.status(201).json({
      message: 'Register successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        isAdmin: newUser.isAdmin,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '9000h'
    });

    // Invalidate old tokens and store the new token
    removeToken(user.currentToken);
    addToken(token);

    res.status(200).json({ token, userId: user.id, isAdmin: user.isAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Email not exist' });
    }

    await sendResetPasswordEmail(email, user.id);
    return res.status(200).json({ message: 'Link to reset password has been sent to your email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const resetPassword  = async (req, res) => {
  const { newPassword, token } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: 'Missing token or new password' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    return res.status(200).json({ message: 'Password has been reset' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const logout = async (req, res) => {
  try {
    return res.status(200).json({ message: 'Logout successful' });

  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};
