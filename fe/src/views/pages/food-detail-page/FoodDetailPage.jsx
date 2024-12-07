import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Food from "api/food";

const FoodDetailPage = () => {
  const { foodId } = useParams();
  const [foodData, setFoodData] = useState({
    id: foodId,
    name: "Sushi",
    image: "https://example.com/sushi.jpg",
    tags: ["Japanese", "Seafood", "Rice"],
    description:
      "Sushi là một món ăn truyền thống của Nhật Bản, được làm từ cơm trộn giấm và hải sản tươi.",
    restaurants: ["Tokyo Deli", "Sushi World"],
    comments: [
      { username: "Alice", content: "Món này rất ngon!" },
      { username: "Bob", content: "Tôi thích vị tươi của cá." },
    ],
    isFavorite: true,
  });

  const toggleFavorite = () => {
    // Chuyển đổi trạng thái
    if (foodData.isFavorite) {
      setFoodData({ ...foodData, isFavorite: false });
    } else setFoodData({ ...foodData, isFavorite: true });
  };

  useEffect(() => {
    const fetchFoodDetail = async () => {
      try {
        const response = await Food.getFoodDetail(foodId);
        setFoodData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết món ăn:", error);
      }
    };
    fetchFoodDetail();
  }, [foodId]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{foodData.name}</h1>

      <div className="flex gap-6">
        <div className="flex-1">
          <img
            src={foodData.image}
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
            className={`px-4 py-2 rounded-xl shadow-md flex justify-center font-bold items-center mb-6 h-[36px] w-[200px] ${
              foodData.isFavorite
                ? "text-red-500 hover:bg-red-100 border-2 border-red-500"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
          >
            {foodData.isFavorite ? "❤️ お気に入り済み" : "🤍 お気に入りに追加"}
          </button>

          <p className="text-gray-700 text-lg leading-7">
            {foodData.description}
          </p>

          {foodData.flavors && foodData.flavors.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                フレーバー
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
                材料
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
                近くのレストラン
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
            コメント
          </h2>

          <div className="space-y-4">
            {foodData.comments.map((comment, index) => (
              <div
                key={index}
                className="p-3 bg-white rounded-lg shadow-sm border border-gray-200"
              >
                <strong className="block text-gray-900">
                  {comment.username ? comment.username : comment.userId}
                </strong>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>

          <form className="mt-6 space-y-3">
            <textarea
              placeholder="コメントを追加..."
              className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md"
            >
              コメントを送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
