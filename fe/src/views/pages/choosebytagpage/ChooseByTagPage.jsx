import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectDish, deselectDish } from "store/slices/selectedDishesSlice";
import "./ChooseByTagPage.css";
import Tag from "api/tag";
import { Link } from "react-router-dom";
import Food from "api/food";

const ChooseByTagPage = () => {
  const { t } = useTranslation();
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [dishes, setDishes] = useState([])

  const selectedDishes = useSelector((state) => state.selectedDishes.value);
  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const getAllTags = async () => {
    // setLoading(true);
    try {
      const response = await Tag.getAllTags();
      setAllTags(response.data);
    } catch (err) {
      // setError(err);
      console.error(err);
    }
    // setLoading(false);
  };

  const getFavouriteTags = async () => {
    try {
      const response = await Tag.getFavouriteTags()
      setSelectedTags(response.data.data.map(tag => tag.name));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllTags();
    getFavouriteTags();
  }, []);

  const handleTagChange = (tagName) => {
    if (selectedTags.includes(tagName)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagName));
    } else {
      setSelectedTags([...selectedTags, tagName]);
    }
  };

  const getFoodByTags = async (tagNames) => {
    try {
      const response = await Food.getFoodByTags(tagNames);
      setDishes(response.data)
    } catch (error) {
      setDishes([])
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    const tagNames = selectedTags.length ? selectedTags.join(', ') : undefined;
    if (tagNames) {
      getFoodByTags(tagNames);
    }
    else setDishes([])


  }, [selectedTags])

  const handleDishSelection = (dishId) => {
    const selectedDish = dishes.find((dish) => dish.id === dishId);
    if (selectedDishes.some((dish) => dish.id === dishId)) {
      dispatch(deselectDish(dishId));
    } else {
      dispatch(selectDish(selectedDish));
    }
  };

  return (
    <div className="container w-3/4 min-w-[700px] max-w-[1200px] m-auto">
      <h1 className="title">{t('choose_dish_by_tag')}</h1>

      <div className="tag-selection">
        <h2 className="tag-selection-title">{t('select_tags')}</h2>
        <div className="tags">
          {allTags.map((tag) => (
            <label
              key={tag.id}
              className={`tag ${
                selectedTags.includes(tag.name) ? "selected" : ""
              }`}
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
        <h2 className="dishes-title">{t('selected_dishes')}</h2>
        {dishes.length > 0 ? (
          <div className="dishes-grid">
            {dishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <img src={dish.images[0]} alt={dish.name} className="dish-img" />
                <h3 className="dish-name">{dish.name}</h3>
                <button
                  className={`select-dish-btn ${
                    selectedDishes.some((d) => d.id === dish.id)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleDishSelection(dish.id)}
                >
                  <span>{`${
                    selectedDishes.some((d) => d.id === dish.id) ? "-" : "+"
                  }`}</span>
                  <span className="button-text">
                    {selectedDishes.some((d) => d.id === dish.id)
                      ? t('remove_from_wheel')
                      : t('add_to_wheel')}
                  </span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-dishes">{t('no_dishes_selected')}</p>
        )}
      </div>

      <Link className="link-button" to="/random-wheel">{t('go_to_wheel')}</Link>
    </div>
  );
};

export default ChooseByTagPage;
