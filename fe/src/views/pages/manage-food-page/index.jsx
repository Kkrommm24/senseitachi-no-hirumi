import { useEffect, useState } from 'react';
import Food from 'api/food';
import { useNavigate } from 'react-router-dom';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 10;

  const handleDelete = (id) => {
    Food.deleteFood(id);
    setFoods(foods.filter(food => food.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Food.getCreatedFood();
      const allFoods = response.data;
      setFoods(allFoods);
      setTotalPages(Math.ceil(allFoods.length / itemsPerPage));
    };

    fetchData();
  }, []);

  // Get current foods
  const indexOfLastFood = currentPage * itemsPerPage;
  const indexOfFirstFood = indexOfLastFood - itemsPerPage;
  const currentFoods = foods.slice(indexOfFirstFood, indexOfLastFood);

  return (
    <div className="container mx-auto p-4">
      <div className="mt-4 flex justify-end">
        <button className="bg-green-500 text-white px-4 py-2 rounded mr-12 block" onClick={() => navigate('/foods/share')}>
          + 追加
        </button>
      </div>
      
      {/* Display foods table here */}
      <div className="overflow-x-auto min-h-[32rem]">
      <table className="w-[40rem] bg-white mx-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">料理一覧</th>
              <th className="py-2 px-4 border-b">アクション</th>
            </tr>
          </thead>
          <tbody>
            {currentFoods.map((food, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{indexOfFirstFood + index + 1}</td>
                <td className="py-2 px-4 border-b">{food.name}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-4 py-1 mr-2 rounded" onClick={() => navigate('/foods/share', {
                    state: 
                    {
                      food: food
                    }
                  })}>更新</button>
                  <button 
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDelete(food.id)}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          以前
        </button>
        <span className="px-4 py-2">
          {currentPage} / {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          次
        </button>
      </div>
    </div>
  );
};

export default FoodList;