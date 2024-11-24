import Food from "api/food";
import { useState, useEffect } from "react";

const Homepage = () => {

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

        <div>
            <section class="banner style-3">
                <div class="container">
                    <div class="">
                        <div class="swiper-container gallery-top">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="banner-item">
                                        <div class="banner-inner">
                                            <div class="banner-thumb">
                                                <img src="assets/images/banner/bg/05.jpg" alt="banner" />
                                            </div>
                                            <div class="banner-content">
                                                <div class="banner-content-area">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <span>(5.5)</span>
                                                        </div>
                                                    </div>
                                                    <h4><a href="recepi-single.html">My New Favourite Recipes For Healthy Living</a></h4>
                                                    <div class="meta-post">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                                <a href="index-3.html#" class="author">Hunter Max </a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-clock-time"></i>
                                                                <a href="index-3.html#" class="date">Cooking Time: 30 min</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>Would you like to get motivate Herei some nfonato for you top mobile appe developers of 20 thier ratn and income If youre looking for</p>
                                                    <div class="meta-post mb-0">
                                                        <ul>
                                                            <li>
                                                                <i class="icofont-heart-alt"></i>
                                                                <a href="index-3.html#" class="heart">20 Likes</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-eye"></i>
                                                                <a href="index-3.html#" class="view">2636 Views</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-speech-comments"></i>
                                                                <a href="index-3.html#" class="comment">24 comments</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-item">
                                        <div class="banner-inner">
                                            <div class="banner-thumb">
                                                <img src="assets/images/banner/bg/02.jpg" alt="banner" />
                                            </div>
                                            <div class="banner-content">
                                                <div class="banner-content-area">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <span>(5.5)</span>
                                                        </div>
                                                    </div>
                                                    <h4><a href="recepi-single.html">My New Favourite Recipes For Healthy Living</a></h4>
                                                    <div class="meta-post">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                                <a href="index-3.html#" class="author">Hunter Max </a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-clock-time"></i>
                                                                <a href="index-3.html#" class="date">Cooking Time: 30 min</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>Would you like to get motivate Herei some nfonato for you top mobile appe developers of 20 thier ratn and income If youre looking for</p>
                                                    <div class="meta-post mb-0">
                                                        <ul>
                                                            <li>
                                                                <i class="icofont-heart-alt"></i>
                                                                <a href="index-3.html#" class="heart">20 Likes</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-eye"></i>
                                                                <a href="index-3.html#" class="view">2636 Views</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-speech-comments"></i>
                                                                <a href="index-3.html#" class="comment">24 comments</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-item">
                                        <div class="banner-inner">
                                            <div class="banner-thumb">
                                                <img src="assets/images/banner/bg/03.jpg" alt="banner" />
                                            </div>
                                            <div class="banner-content">
                                                <div class="banner-content-area">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <span>(5.5)</span>
                                                        </div>
                                                    </div>
                                                    <h4><a href="recepi-single.html">My New Favourite Recipes For Healthy Living</a></h4>
                                                    <div class="meta-post">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                                <a href="index-3.html#" class="author">Hunter Max </a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-clock-time"></i>
                                                                <a href="index-3.html#" class="date">Cooking Time: 30 min</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>Would you like to get motivate Herei some nfonato for you top mobile appe developers of 20 thier ratn and income If youre looking for</p>
                                                    <div class="meta-post mb-0">
                                                        <ul>
                                                            <li>
                                                                <i class="icofont-heart-alt"></i>
                                                                <a href="index-3.html#" class="heart">20 Likes</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-eye"></i>
                                                                <a href="index-3.html#" class="view">2636 Views</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-speech-comments"></i>
                                                                <a href="index-3.html#" class="comment">24 comments</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-item">
                                        <div class="banner-inner">
                                            <div class="banner-thumb">
                                                <img src="assets/images/banner/bg/04.jpg" alt="banner" />
                                            </div>
                                            <div class="banner-content">
                                                <div class="banner-content-area">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <span>(5.5)</span>
                                                        </div>
                                                    </div>
                                                    <h4><a href="recepi-single.html">My New Favourite Recipes For Healthy Living</a></h4>
                                                    <div class="meta-post">
                                                        <ul>
                                                            <li>
                                                                <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                                <a href="index-3.html#" class="author">Hunter Max </a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-clock-time"></i>
                                                                <a href="index-3.html#" class="date">Cooking Time: 30 min</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <p>Would you like to get motivate Herei some nfonato for you top mobile appe developers of 20 thier ratn and income If youre looking for</p>
                                                    <div class="meta-post">
                                                        <ul>
                                                            <li>
                                                                <i class="icofont-heart-alt"></i>
                                                                <a href="index-3.html#" class="heart">20 Likes</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-eye"></i>
                                                                <a href="index-3.html#" class="view">2636 Views</a>
                                                            </li>
                                                            <li>
                                                                <i class="icofont-speech-comments"></i>
                                                                <a href="index-3.html#" class="comment">24 comments</a>
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
                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="banner-bitem">
                                        <div class="banner-binner">
                                            <div class="banner-bcontent">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#0">Chicken</a>
                                                    </div>
                                                </div>
                                                <h6>My New Favourite Recipes For Healthy Living</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-bitem">
                                        <div class="banner-binner">
                                            <div class="banner-bcontent">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#0">Chicken</a>
                                                    </div>
                                                </div>
                                                <h6>My New Favourite Recipes For Healthy Living</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-bitem">
                                        <div class="banner-binner">
                                            <div class="banner-bcontent">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#0">Chicken</a>
                                                    </div>
                                                </div>
                                                <h6>My New Favourite Recipes For Healthy Living</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-bitem">
                                        <div class="banner-binner">
                                            <div class="banner-bcontent">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#0">Chicken</a>
                                                    </div>
                                                </div>
                                                <h6>My New Favourite Recipes For Healthy Living</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="banner-bitem">
                                        <div class="banner-binner">
                                            <div class="banner-bcontent">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#0">Chicken</a>
                                                    </div>
                                                </div>
                                                <h6>My New Favourite Recipes For Healthy Living</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="recipe-categori padding-tb home-3 bg-body pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Recipes Categories</h4>
                        <a href="index-3.html#" class="text-btn">All Recipes<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">Chicken</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/02.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">Fast Food</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/03.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">sea Fish</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">Hot Pizza</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">Salads</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/06.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">soft drink</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/07.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">lunch</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">dinner</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="recent-recipe home-3 padding-tb bg-body pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Popular Recipes</h4>
                        <a href="index-3.html#" class="text-btn">All Recipes<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            {/* <div class="col-xl-4 col-md-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <a href="index-3.html#"> <img src="assets/images/food-recipe/01.jpg" alt="food-recipe" /></a>
                                    </div>
                                    <div class="recipe-content">
                                        <div class="meta-tag">
                                            <div class="categori">
                                                <a href="index-3.html#">Chicken</a>
                                            </div>
                                            <div class="rating">
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <i class="icofont-star"></i>
                                                <span>(5.5)</span>
                                            </div>
                                        </div>
                                        <h6><a href="index-3.html#">Food Corner: Top Japanese Best Restaurants for Sushi</a></h6>
                                        <div class="meta-post">
                                            <ul>
                                                <li>
                                                    <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                    <a href="index-3.html#" class="author">Hunter Max </a>
                                                </li>
                                                <li>
                                                    <i class="icofont-clock-time"></i>
                                                    <a href="index-3.html#" class="date">Time: 30 min</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {foods.slice(0, 9).map((food) => (
                                <div key={food.id} class="col-xl-4 col-md-6 col-12">
                                    <div class="recipe-item">
                                        <div class="recipe-thumb custom-img">
                                            <a href="index-3.html#"> <img src={food.image} alt="food-recipe" /></a>
                                        </div>
                                        <div class="recipe-content">
                                            <div class="meta-tag">
                                                <div class="categori">
                                                    <a href="index-3.html#">Hot</a>
                                                </div>
                                                <div class="rating">
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <span>(5)</span>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">{food.name}:{food.description}</a></h6>
                                            <div class="meta-post">
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
                                                            maxWidth: "calc(100% - 60px)", // Tự động tính toán chiều rộng trừ khoảng cách hình ảnh
                                                            display: "block",
                                                            wordWrap: "break-word", // Cho phép xuống dòng nếu text quá dài
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* <section class="blog-section overflow-hidden padding-tb bg-body home-3 pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Popular Recipes</h4>
                        <a href="index-3.html#" class="text-btn">All Recipes<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row g-5">
                            <div class="col-lg-6 col-12 blog-left">
                                <div class="post-item">
                                    <div class="post-inner">
                                        <div class="post-thumb">
                                            <a href="index-3.html#">
                                                <img src="assets/images/blog/01.jpg" alt="petuk-blog" />
                                            </a>
                                        </div>
                                        <div class="post-content">
                                            <div class="meta-tag">
                                                <div class="categori">
                                                    <a href="index-3.html#">Chicken</a>
                                                </div>
                                                <div class="rating">
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <i class="icofont-star"></i>
                                                    <span>(5.5)</span>
                                                </div>
                                            </div>
                                            <h5><a href="index-3.html#">Top Japanese Best Restaurants For Sush..</a></h5>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <img src="assets/images/meta-post/recipe/01.jpg" alt="food-recipe" />
                                                        <a href="index-3.html#" class="author">Hunter Max </a>
                                                    </li>
                                                    <li>
                                                        <i class="icofont-clock-time"></i>
                                                        <a href="index-3.html#" class="date">Time: 30 min</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>Semper odio Nam fringilla scelerisque tincidunt Orcing varius natoque Donec tincidunt posuere ornare. phasellus placerat odionon feugiating volutpat, arcu tellus facilisis nulla,</p>
                                            <a href="index-3.html#" class="food-btn style-2"><span>Read More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12 blog-right">
                                <div class="row g-4">
                                    <div class="col-md-6 col-12">
                                        <div class="post-item">
                                            <div class="post-inner">
                                                <div class="post-thumb">
                                                    <a href="index-3.html#">
                                                        <img src="assets/images/blog/02.jpg" alt="petuk-blog" />
                                                    </a>
                                                </div>
                                                <div class="post-content">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                    </div>
                                                    <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="post-item">
                                            <div class="post-inner">
                                                <div class="post-thumb">
                                                    <a href="index-3.html#">
                                                        <img src="assets/images/blog/03.jpg" alt="petuk-blog" />
                                                    </a>
                                                </div>
                                                <div class="post-content">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                    </div>
                                                    <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="post-item">
                                            <div class="post-inner">
                                                <div class="post-thumb">
                                                    <a href="index-3.html#">
                                                        <img src="assets/images/blog/04.jpg" alt="petuk-blog" />
                                                    </a>
                                                </div>
                                                <div class="post-content">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                    </div>
                                                    <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="post-item">
                                            <div class="post-inner">
                                                <div class="post-thumb">
                                                    <a href="index-3.html#">
                                                        <img src="assets/images/blog/05.jpg" alt="petuk-blog" />
                                                    </a>
                                                </div>
                                                <div class="post-content">
                                                    <div class="meta-tag">
                                                        <div class="categori">
                                                            <a href="index-3.html#">Chicken</a>
                                                        </div>
                                                    </div>
                                                    <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="product style-3 padding-tb bg-body ">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Popular Products</h4>
                        <a href="index-3.html#" class="text-btn">All Products<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/01.jpg" alt="food-product" />
                                        <span class="price">$10</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/02.jpg" alt="food-product" />
                                        <span class="price">$20</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/03.jpg" alt="food-product" />
                                        <span class="price">$30</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/04.jpg" alt="food-product" />
                                        <span class="price">$40</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="product style-4 padding-tb bg-body pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Recipes Books</h4>
                        <a href="index-3.html#" class="text-btn">All Products<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/home-3/01.jpg" alt="food-product" />
                                        <span class="price">$10</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/home-3/02.jpg" alt="food-product" />
                                        <span class="price">$20</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/home-3/03.jpg" alt="food-product" />
                                        <span class="price">$30</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src="assets/images/product/home-3/04.jpg" alt="food-product" />
                                        <span class="price">$40</span>
                                    </div>
                                    <div class="product-content">
                                        <p>Mexican Food</p>
                                        <h6><a href="index-3.html#">Cream Chicken Chiladas</a></h6>
                                        <div class="rating">
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                            <i class="icofont-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="blog-section overflow-hidden trending padding-tb bg-body home-3 pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>Trending Posts</h4>
                        <a href="index-3.html#" class="text-btn">View All Posts<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row g-4">
                            <div class="col-xl-6  col-12">
                                <div class="post-item">
                                    <div class="post-inner">
                                        <div class="post-thumb">
                                            <a href="index-3.html#"><img src="assets/images/blog/trending/01.jpg" alt="trending-blog" /></a>
                                            <div class="post-content">
                                                <div class="meta-tag">
                                                    <div class="categori">
                                                        <a href="index-3.html#">Chicken</a>
                                                    </div>
                                                </div>
                                                <h5><a href="index-3.html#">Top Japanese Best Restaurants For Sush..</a></h5>
                                                <div class="meta-post">
                                                    <ul>
                                                        <li>
                                                            <i class="icofont-calendar"></i>
                                                            <a href="index-3.html#" class="date">12 May 2021</a>
                                                        </li>
                                                        <li>
                                                            <i class="icofont-eye"></i>
                                                            <a href="index-3.html#" class="view">2636</a>
                                                        </li>
                                                        <li>
                                                            <i class="icofont-speech-comments"></i>
                                                            <a href="index-3.html#" class="comment">24</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="post-item">
                                    <div class="post-inner">
                                        <div class="post-thumb">
                                            <a href="index-3.html#">
                                                <img src="assets/images/blog/trending/02.jpg" alt="trending-blog" />
                                            </a>
                                        </div>
                                        <div class="post-content">
                                            <div class="meta-tag">
                                                <div class="categori">
                                                    <a href="index-3.html#">Chicken</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i class="icofont-calendar"></i>
                                                        <a href="index-3.html#" class="date">12 May 2021</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-md-6 col-12">
                                <div class="post-item">
                                    <div class="post-inner">
                                        <div class="post-thumb">
                                            <a href="index-3.html#">
                                                <img src="assets/images/blog/trending/03.jpg" alt="trending-blog" />
                                            </a>
                                        </div>
                                        <div class="post-content">
                                            <div class="meta-tag">
                                                <div class="categori">
                                                    <a href="index-3.html#">Chicken</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">My New Favourite Recipes For Healthy</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i class="icofont-calendar"></i>
                                                        <a href="index-3.html#" class="date">12 May 2021</a>
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

            <section class="gallery-section padding-tb bg-body">
                <div class="container">
                    <div class="gallery-area">
                        <div class="section-header style-2">
                            <h4>Photo Galleries</h4>
                            <a href="index-3.html#" class="text-btn">View All Photos<i class="icofont-rounded-double-right"></i></a>
                        </div>
                        <div class="section-wrapper">
                            <div class="row justify-content-center g-0">
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/01.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/01.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/02.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/02.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/03.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/03.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/04.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/04.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/05.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/05.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/06.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/06.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/07.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/07.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
                                    </div>
                                </div>
                                <div class="gallery-item">
                                    <div class="gallery-thumb">
                                        <img src="assets/images/gallery/08.jpg" alt="gallery" />
                                        <a href="assets/images/gallery/08.jpg" data-rel="lightcase" class="gallery-icon" title="Click Here"><i class="icofont-eye"></i></a>
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
                            <h3>For Newsletter</h3>
                        </div>
                        <div class="news-form">
                            <form action="https://foxcoders.com/">
                                <label>
                                    <input type="email" name="email" placeholder="Enter Your Email" />
                                </label>
                                <input type="submit" name="submit" value="Subscribe now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <a href="index-3.html#" class="scrollToTop"><i class="icofont-swoosh-up"></i></a>
        </div>
    )
}

export default Homepage;
