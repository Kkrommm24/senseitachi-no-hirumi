import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// SAVE FAVORITE TAGS
export const saveFavoriteTag = async (req, res) => {
  const userId = req.userId;
  const tagIds = req.body.tagIds;

  if (!tagIds || tagIds.length === 0) {
    return res.status(400).json({
      status: 400,
      message: 'At least one tagId is required',
      data: null
    });
  }

  try {
    // Find existing favorite tags for the user
    const existingTags = await prisma.userFavoriteTag.findMany({
      where: {
        userId,
      },
      select: {
        tagId: true
      }
    });

    const existingTagIds = existingTags.map(tag => tag.tagId);

    // Determine which tags to add and which to remove
    const newTagIds = tagIds.filter(tagId => !existingTagIds.includes(tagId));
    const removeTagIds = existingTagIds.filter(tagId => !tagIds.includes(tagId));

    // Add new favorite tags
    if (newTagIds.length > 0) {
      await prisma.userFavoriteTag.createMany({
        data: newTagIds.map(tagId => ({
          userId,
          tagId
        }))
      });
    }

    // Remove tags that are no longer favorite
    if (removeTagIds.length > 0) {
      await prisma.userFavoriteTag.deleteMany({
        where: {
          userId,
          tagId: { in: removeTagIds }
        }
      });
    }

    const savedFavoriteTags = await prisma.tag.findMany({
      where: {
        id: { in: tagIds },
      },
      select: {
        name: true
      }
    });

    return res.status(201).json({
      status: 201,
      message: 'Favorite tags saved successfully',
      data: savedFavoriteTags
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'An error occurred while saving favorite tags',
      data: error.message
    });
  }
}

// GET FAVORITE TAG
export const getFavoriteTag = async (req, res) => {
  const userId = req.userId;

  try {
    const favoriteTags = await prisma.userFavoriteTag.findMany({
      where: {
        userId: userId,
      },
      select: {
        tagId: true,
      },
    });
    if (favoriteTags.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'No favorite tags found for this user',
        data: null,
      });
    }

    const tags = await prisma.tag.findMany({
      where: {
        id: {
          in: favoriteTags.map((favoriteTag) => favoriteTag.tagId),
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    return res.status(200).json({
      status: 200,
      message: 'Favorite tags retrieved successfully',
      data: tags,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: 'An error occurred while retrieving favorite tags',
      data: error.message || null,
    });
  }

}
