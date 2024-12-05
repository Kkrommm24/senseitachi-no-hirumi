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
            <section class="recipe-categori padding-tb home-3 bg-body pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>レシピカテゴリー</h4>
                        <a href="index-3.html#" class="text-btn">すべてのレシピ<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">チキン</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/02.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">ファストフード</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/03.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">シーフード</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/01.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">ホットピザ</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">サラダ</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/06.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">ソフトドリンク</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/07.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">ランチ</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <img src="assets/images/food-recipe/08.png" alt="food-recipe" />
                                    </div>
                                    <div class="recipe-content">
                                        <a href="index-3.html#">ディナー</a>
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
                        <h4>人気のレシピ</h4>
                        <a href="index-3.html#" class="text-btn">すべて<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            {foods.slice(0, 9).map((food) => (
                                <div key={food.id} class="col-xl-4 col-md-6 col-12">
                                    <div class="recipe-item">
                                        <div class="recipe-thumb custom-img">
                                            <a href="index-3.html#"> <img src={food.image} alt="food-recipe" /></a>
                                        </div>
                                        <div class="recipe-content">
                                            <div class="meta-tag">
                                                <div class="categori">
                                                    <a href="index-3.html#">ホット</a>
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

            <section class="blog-section overflow-hidden trending padding-tb bg-body home-3 pb-0">
                <div class="container">
                    <div class="section-header style-2">
                        <h4>トレンド投稿</h4>
                        <a href="index-3.html#" class="text-btn">すべて<i class="icofont-rounded-double-right"></i></a>
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
                                                        <a href="index-3.html#">CNN</a>
                                                    </div>
                                                </div>
                                                <h5><a href="index-3.html#">寿司のための日本のトップレストラン</a></h5>
                                                <div class="meta-post">
                                                    <ul>
                                                        <li>
                                                            <i class="icofont-calendar"></i>
                                                            <a href="index-3.html#" class="date">12 2024</a>
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
                                                    <a href="index-3.html#">BBC</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">新しいお気に入りのヘルシーレシピ</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i class="icofont-calendar"></i>
                                                        <a href="index-3.html#" class="date">12 2024</a>
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
                                                    <a href="index-3.html#">MNC</a>
                                                </div>
                                            </div>
                                            <h6><a href="index-3.html#">新しいお気に入りのヘルシーレシピ</a></h6>
                                            <div class="meta-post">
                                                <ul>
                                                    <li>
                                                        <i class="icofont-calendar"></i>
                                                        <a href="index-3.html#" class="date">12 2024</a>
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
                            <h4>写真ギャラリー</h4>
                            <a href="index-3.html#" class="text-btn">すべて<i class="icofont-rounded-double-right"></i></a>
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
                            <h3>ニュースレター</h3>
                        </div>
                        <div class="news-form">
                            <form action="https://foxcoders.com/">
                                <label>
                                    <input type="email" name="email" placeholder="メールアドレスを入力" />
                                </label>
                                <input type="submit" name="submit" value="今すぐ購読" />
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
