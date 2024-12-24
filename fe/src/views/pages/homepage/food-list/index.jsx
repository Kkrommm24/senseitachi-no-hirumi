import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import Food from 'api/food';
import { message } from 'antd';
import { useTranslation } from 'react-i18next'; // Add this import

const FoodList = ({ foods }) => {
    const { t } = useTranslation(); // Add this hook
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    const [favoriteFoods, setFavoriteFoods] = useState(foods.map(food => ({
        ...food,
        isFavorites: food.isFavorites || false,
    })));

    useEffect(() => {
        setFavoriteFoods(foods.map(food => ({
            ...food,
            isFavorites: food.isFavorites || false,
        })));
    }, [foods]);

    const handleAddToFavorites = (foodId) => {
        Food.addFavoritesFood(foodId)
            .then(response => {
                message.success(t('add_favorites_success'));
                setFavoriteFoods(favoriteFoods.map(food =>
                    food.id === foodId ? { ...food, isFavorites: true } : food
                ));
            })
            .catch(error => {
                message.error(t('add_favorites_error'));
                console.error(t('add_favorites_error'), error);
            });
    };

    const handleRemoveFromFavorites = (foodId) => {
        Food.removeFavoritesFood(foodId)
            .then(response => {
                message.success(t('remove_favorites_success'));
                setFavoriteFoods(favoriteFoods.map(food =>
                    food.id === foodId ? { ...food, isFavorites: false } : food
                ));
            })
            .catch(error => {
                message.error(t('remove_favorites_error'));
                console.error(t('remove_favorites_error'), error);
            });
    };

    return (
        <div className="section-wrapper">
            <div className="row justify-content-center">
                {favoriteFoods.slice(0, 9).map((food) => (
                    <div key={food.id} className='col-xl-4 col-md-6 col-12 relative'>
                        {token && (
                            <div className='absolute z-50 right-5 top-2'>
                                {food.isFavorites ? (
                                    <HeartFilled
                                        onClick={() => handleRemoveFromFavorites(food.id)}
                                        className="text-[#fb524f] text-4xl cursor-pointer"
                                    />
                                ) : (
                                    <HeartOutlined
                                        onClick={() => handleAddToFavorites(food.id)}
                                        className="text-[#000000] text-4xl cursor-pointer"
                                    />
                                )}
                            </div>
                        )}
                        <div className="">
                            <Link to={`/foods/${food.id}`}>
                                <div className="recipe-item">
                                    <div className="recipe-thumb custom-img">
                                        <a href="l#">
                                            <img src={food.images[0]} alt="food-recipe" />
                                        </a>
                                    </div>
                                    <div className="recipe-content">
                                        <div className="meta-tag">
                                            <div className="categori">
                                                <a href="index-3.html#">ホット</a>
                                            </div>
                                            <div className="rating">
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <i className="icofont-star"></i>
                                                <span>(5)</span>
                                            </div>
                                        </div>
                                        <h6>
                                            <a href="index-3.html#">{food.name}:{food.description}</a>
                                        </h6>
                                        <div className="meta-post">
                                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                                <img
                                                    src="/assets/images/image.png"
                                                    alt="food-recipe"
                                                    style={{
                                                        width: "30px",
                                                        height: "30px",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        maxWidth: "calc(100% - 60px)",
                                                        display: "block",
                                                        wordWrap: "break-word",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >
                                                    {food.comments[0].content}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;
