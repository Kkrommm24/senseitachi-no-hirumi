import React from 'react';
import { Link } from 'react-router-dom';
import { HeartFilled } from '@ant-design/icons';
import Food from 'api/food';
import { message } from 'antd'; // Sử dụng Ant Design để hiển thị thông báo

const handleAddToFavorites = (food) => {
    Food.addFavoritesFood(food.id)
        .then(response => {
            message.success(`Thêm ${food.name} vào danh sách yêu thích thành công`);
            // Thêm logic để cập nhật Redux store hoặc UI nếu cần
        })
        .catch(error => {
            message.error('Món ăn đã có trong danh sách yêu thích');
            console.error('Lỗi khi thêm vào danh sách yêu thích', error);
        });
};

const FoodList = ({ foods }) => {
    return (
        <div className="section-wrapper">
            <div className="row justify-content-center">
                {foods.slice(0, 9).map((food) => (
                    <div key={food.id} className='col-xl-4 col-md-6 col-12 relative'>
                        <div className='absolute z-50 right-5 top-2'>
                            <HeartFilled onClick={() => handleAddToFavorites(food)} className="text-[#fb524f] text-4xl cursor-pointer" />
                        </div>
                        <div className="">
                            <Link to={`/foods/${food.id}`}>
                                <div className="recipe-item">
                                    <div className="recipe-thumb custom-img">
                                        <a href="l#">
                                            <img src={food.image} alt="food-recipe" />
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
                                                    src="assets/images/image.png"
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
