import { useState } from 'react';
import './ChooseByTagPage.css';

// Dữ liệu tạm thời cho tags và món ăn
const tagsData = [
  { id: 1, name: 'Spicy' },
  { id: 2, name: 'Vegan' },
  { id: 3, name: 'Dessert' },
  { id: 4, name: 'Seafood' },
  { id: 5, name: 'Grilled' },
];

const dishesData = [
  { id: 1, name: 'Spicy Ramen', img: 'https://via.placeholder.com/150', tags: ['Spicy'] },
  { id: 2, name: 'Vegan Salad', img: 'https://via.placeholder.com/150', tags: ['Vegan'] },
  { id: 3, name: 'Chocolate Cake', img: 'https://via.placeholder.com/150', tags: ['Dessert'] },
  { id: 4, name: 'Grilled Salmon', img: 'https://via.placeholder.com/150', tags: ['Seafood', 'Grilled'] },
  { id: 5, name: 'Spicy Tofu', img: 'https://via.placeholder.com/150', tags: ['Spicy', 'Vegan'] },
];

const ChooseByTagPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);

  // Handle tag selection
  const handleTagChange = (tagName) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  // Filter dishes based on selected tags
  const filteredDishes = dishesData.filter((dish) =>
    dish.tags.some((tag) => selectedTags.includes(tag))
  );

  // Handle dish selection for the "random wheel"
  const handleDishSelection = (dishId) => {
    if (selectedDishes.includes(dishId)) {
      setSelectedDishes(selectedDishes.filter((id) => id !== dishId)); // Remove from selected dishes
    } else {
      setSelectedDishes([...selectedDishes, dishId]); // Add to selected dishes
    }
  };

  return (
    <div className="container">
      <h1 className="title">タグで料理を選ぶ</h1>

      <div className="tag-selection">
        <h2 className="tag-selection-title">タグを選択:</h2>
        <div className="tags">
          {tagsData.map((tag) => (
            <label
              key={tag.id}
              className={`tag ${selectedTags.includes(tag.name) ? 'selected' : ''}`}
            >
              <input
                type="checkbox"
                className="checkbox"
                checked={selectedTags.includes(tag.name)}
                onChange={() => handleTagChange(tag.name)}
              />
              <span>{tag.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="dishes">
        <h2 className="dishes-title">選ばれた料理:</h2>
        {filteredDishes.length > 0 ? (
          <div className="dishes-grid">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="dish-img"
                />
                <h3 className="dish-name">{dish.name}</h3>
                <button
                  className={`select-dish-btn ${selectedDishes.includes(dish.id) ? 'selected' : ''}`}
                  onClick={() => handleDishSelection(dish.id)}
                >
                  <span>{`${selectedDishes.includes(dish.id) ? '-' : '+'}`}</span>
                  <span className="button-text">{selectedDishes.includes(dish.id) ? 'ランダムホイールから取り除くa' : 'ランダムホイールに追加する'}</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-dishes">選ばれた料理はありません。</p>
        )}
      </div>
    </div>
  );
};

export default ChooseByTagPage;
