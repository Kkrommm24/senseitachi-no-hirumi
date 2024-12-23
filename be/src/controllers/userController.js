import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getUserProfile = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Format response data
      const userProfile = {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
      };
  
      res.json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const updateUserProfile = async (req, res) => {
    try {
      const userId = req.user.id;
      const { name, email, avatar, currentPassword, newPassword } = req.body;
  
      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // If updating email, check if new email already exists
      if (email && email !== user.email) {
        const emailExists = await prisma.user.findUnique({
          where: { email }
        });
        if (emailExists) {
          return res.status(400).json({ message: 'Email already in use' });
        }
      }
  
      // Prepare update data
      const updateData = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (avatar) updateData.avatar = avatar;
  
      // Handle password update
      if (currentPassword && newPassword) {
        // Validate current password
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: 'Current password is incorrect' });
        }

        // Check if newPassword matches confirmPassword
        if (newPassword !== req.body.confirmPassword) {
          return res.status(400).json({ message: 'New password and confirmation do not match' });
        }

        // Hash and update password
        updateData.password = await bcrypt.hash(newPassword, 10);
      }
  
      // Update user
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData,
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
          isAdmin: true
        }
      });
  
      res.json({
        message: 'Profile updated successfully',
        user: updatedUser
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  