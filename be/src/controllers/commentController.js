import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const saveComment = async (req, res) => {
  const { foodId } = req.params;
  const { content } = req.body;

  const userId = req.userId;

  if (!content) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Content is required',
      data: null,
    });
  }

  try {
    const newComment = await prisma.comment.create({
      data: {
        userId: parseInt(userId),
        foodId: parseInt(foodId),
        content,
      },
    });

    const responseData = {
      content: newComment.content,
      createdAt: newComment.createdAt,
    };

    res.status(201).json({
      statusCode: 201,
      message: 'Save comment successfully',
      data: responseData,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: 'Error when saving comment',
      data: null,
    });
  }
}
