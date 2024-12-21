import Food from "api/food";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FavoritesFood from "../favorites-food";
import FoodList from "./food-list";
import { useTranslation } from 'react-i18next';

const Homepage = () => {
    const { t } = useTranslation();

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await Food.getAllFood();
                setFoods(response.data);
                console.log(response.data);

                // setLoading(false);
            } catch (err) {
                setError(err);
                // setLoading(false);
            }
        };

        fetchFoods();
    }, []);

    return (
        <div className="container bg-[#f5f5f1]">
            <section class="recipe-categori pt-2 home-3 bg-body pb-0">
                <div class="container">
                    <div class="section-header border-0 style-2">
                        <h4>{t('recipe_category')}</h4>
                        <a href="index-3.html#" class="text-btn">{t('all_recipes')}<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div className="section-wrapper">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('chicken')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/02.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('fast_food')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/03.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('seafood')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('hot_pizza')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('salad')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/06.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('soft_drink')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/07.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('lunch')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div className="recipe-item">
                                    <div className="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">{t('dinner')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="recent-recipe home-3 pt-2 bg-body pb-0">
                <div class="container">
                    <div class="section-header border-0 style-2">
                        <h4>{t('popular_recipes')}</h4>
                        <a href="index-3.html#" class="text-btn">{t('view_all')}<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <FoodList foods={foods} />
                </div>
            </section>

            <section class="blog-section overflow-hidden trending pt-2 bg-body home-3 pb-0">
                <div class="container">
                    <div class="section-header border-0 style-2">
                        <h4>{t('trending_posts')}</h4>
                        <a href="index-3.html#" class="text-btn">{t('view_all')}<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-xl-6  col-12">
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <a href="index-3.html#"><img src="assets/images/blog/trending/01.jpg" alt="trending-blog" /></a>
                                            <div className="post-content">
                                                <div className="meta-tag">
                                                    <div className="categori">
                                                        <a href="index-3.html#">CNN</a>
                                                    </div>
                                                </div>
                                                <h5><a href="index-3.html#">{t('top_restaurant_for_sushi')}</a></h5>
                                                <div class="meta-post">
                                                    <ul>
                                                        <li>
                                                            <i className="icofont-calendar"></i>
                                                            <a href="index-3.html#" className="date">12 2024</a>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-eye"></i>
                                                            <a href="index-3.html#" className="view">2636</a>
                                                        </li>
                                                        <li>
                                                            <i className="icofont-speech-comments"></i>
                                                            <a href="index-3.html#" className="comment">24</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <a href="index-3.html#">
                                                <img src="assets/images/blog/trending/02.jpg" alt="trending-blog" />
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <div className="meta-tag">
                                                <div className="categori">
                                                    <a href="index-3.html#">BBC</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">{t('new_favorite_healthy_recipe')}</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i className="icofont-calendar"></i>
                                                        <a href="index-3.html#" className="date">12 2024</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 col-12">
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                            <a href="index-3.html#">
                                                <img src="assets/images/blog/trending/03.jpg" alt="trending-blog" />
                                            </a>
                                        </div>
                                        <div className="post-content">
                                            <div className="meta-tag">
                                                <div className="categori">
                                                    <a href="index-3.html#">MNC</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">{t('new_favorite_healthy_recipe')}</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i className="icofont-calendar"></i>
                                                        <a href="index-3.html#" className="date">12 2024</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="gallery-section pt-2 bg-body">
                <div class="container">
                    <div class="gallery-area">
                        <div class="section-header border-0 style-2">
                            <h4>{t('photo_gallery')}</h4>
                            <a href="index-3.html#" class="text-btn">{t('view_all')}<i class="icofont-rounded-double-right"></i></a>
                        </div>
                        <div className="section-wrapper">
                            <div className="row justify-content-center g-0">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/01.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/01.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/02.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/02.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/03.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/03.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/04.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/04.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/05.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/05.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/06.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/06.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/07.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/07.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="assets/images/gallery/08.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/08.jpg" data-rel="lightcase" className="gallery-icon" title="Click Here"><i className="icofont-eye"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="news-letter">
                <div class="container">
                    <div class="section-wrapper">
                        <div class="news-title">
                            <h3>{t('newsletter')}</h3>
                        </div>
                        <div className="news-form">
                            <form action="https://foxcoders.com/">
                                <label>
                                    <input type="email" name="email" placeholder={t('enter_email')} />
                                </label>
                                <input type="submit" name="submit" value={t('subscribe_now')} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <a href="index-3.html#" class="scrollToTop"><i class="icofont-swoosh-up"></i></a>
            {/* <FavoritesFood /> */}
        </div>
    )
}

export default Homepage;
