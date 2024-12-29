import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Food from "api/food";
import Comment from "api/comment";

const FoodDetailPage = () => {
  const { t } = useTranslation();
  const { foodId } = useParams();
  const [comment, setComment] = useState("");
  const [foodData, setFoodData] = useState({
    id: foodId,
    name: "Sushi",
    images: ["https://example.com/sushi.jpg"],
    tags: ["Japanese", "Seafood", "Rice"],
    description:
      "Sushi là một món ăn truyền thống của Nhật Bản, được làm từ cơm trộn giấm và hải sản tươi.",
    restaurants: ["Tokyo Deli", "Sushi World"],
    comments: [
      { userName: "Alice", content: "Món này rất ngon!" },
      { userName: "Bob", content: "Tôi thích vị tươi của cá." },
    ],
    price: "700000",
    isFavourite: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      return;
    }

    try {
      await Comment.saveComment(foodId, comment);
      setComment("");
    } catch (error) {
      console.error(t('comment_error'), error);
    }

    try {
      const response = await Food.getFoodDetail(foodId);
      setFoodData(response.data);
    } catch (error) {
      console.error(t('fetch_food_detail_error'), error);
    }
  };

  const toggleFavorite = async () => {
    try {
      if (foodData.isFavourite) {
        await Food.removeFavoritesFood(parseInt(foodId));
        setFoodData({ ...foodData, isFavourite: false });
      } else {
        await Food.addFavoritesFood(parseInt(foodId));
        setFoodData({ ...foodData, isFavourite: true });
      }
    } catch (error) {
      console.error(t('favorite_toggle_error'), error);
    }
  };

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const response = await Food.getFoodDetail(foodId);
        setFoodData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFoodDetail();
  }, [foodId]);

  console.log(foodData)

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {foodData.name}
        <span className="text-xl text-gray-500 italic font-normal ml-5">
          {foodData.price} VND
        </span>
      </h1>

      <div className="flex gap-6">
        <div className="flex-1">
          <img
            src={foodData.images[0]}
            alt={foodData.name}
            className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
          />

          <div className="flex flex-wrap gap-2 mb-4">
            {foodData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={toggleFavorite}
            className={`py-2 rounded-xl shadow-md flex justify-center font-bold items-center mb-6 h-[36px] w-[220px] ${
              foodData.isFavourite
                ? "text-red-500 hover:bg-red-100 border-2 border-red-500"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {foodData.isFavourite ? t('favorite_added') : t('add_to_favorites')}
          </button>

          <p className="text-gray-700 text-lg leading-7">
            {foodData.description}
          </p>

          {foodData.flavors && foodData.flavors.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {t('flavors')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {foodData.flavors.map((flavor, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {foodData.ingredients && foodData.ingredients.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                {t('ingredients')}
              </h2>

              <div className="flex flex-wrap gap-2">
                {foodData.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {foodData.restaurants.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {t('nearby_restaurants')}
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                {foodData.restaurants.map((restaurant, index) => (
                  <li key={index}>{restaurant.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-1/3 bg-gray-50 rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {t('comments')}
          </h2>

          <div className="space-y-4">
            {foodData.comments.map((comment, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <strong className="block text-gray-900">
                  {comment.userName ? comment.userName : comment.userId}
                </strong>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <textarea
              onChange={(e) => setComment(e.target.value)}
              placeholder={t('add_comment')}
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={comment}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md"
            >
              {t('submit_comment')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
