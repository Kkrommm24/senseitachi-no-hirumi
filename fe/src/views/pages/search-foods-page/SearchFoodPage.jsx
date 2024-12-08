import Food from "api/food";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchFoodPage = () => {
  const [foods, setFoods] = useState([]);

  const [searchParams] = useSearchParams();
  const queryName = searchParams.get('name');

   

  useEffect(() => {

    const fetchFoods = async () => {
      try {
        const response = await Food.searchFoods({name: queryName});
        setFoods(response.data);
        console.log(response.data);

        // setLoading(false);
      } catch (err) {
        console.error(err);
        // setLoading(false);
      }
    };

    fetchFoods();
  }, [queryName]);

  return (
    <div>
      <section className="recent-recipe home-3 padding-tb bg-body pb-0">
        <div className="container">
          <div className="section-header style-2">
            <h4>人気のレシピ</h4>
            <a href="index-3.html#" className="text-btn">
              すべて<i className="icofont-rounded-double-right"></i>
            </a>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center">
              {foods.slice(0, 9).map((food) => (
                <div key={food.id} className="col-xl-4 col-md-6 col-12">
                  <div className="recipe-item">
                    <div className="recipe-thumb custom-img">
                      <a href="index-3.html#">
                        {" "}
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
                        <a href="index-3.html#">
                          {food.name}:{food.description}
                        </a>
                      </h6>
                      <div className="meta-post">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "10px",
                          }}
                        >
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

      <section className="gallery-section padding-tb bg-body">
        <div className="container">
          <div className="gallery-area">
            <div className="section-header style-2">
              <h4>写真ギャラリー</h4>
              <a href="index-3.html#" className="text-btn">
                すべて<i className="icofont-rounded-double-right"></i>
              </a>
            </div>
            <div className="section-wrapper">
              <div className="row justify-content-center g-0">
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/01.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/01.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/02.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/02.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/03.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/03.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/04.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/04.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/05.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/05.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/06.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/06.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/07.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/07.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="gallery-item">
                  <div className="gallery-thumb">
                    <img src="assets/images/gallery/08.jpg" alt="gallery" />
                    <a
                      href="assets/images/gallery/08.jpg"
                      data-rel="lightcase"
                      className="gallery-icon"
                      title="Click Here"
                    >
                      <i className="icofont-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="news-letter">
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title">
              <h3>ニュースレター</h3>
            </div>
            <div className="news-form">
              <form action="https://foxcoders.com/">
                <label>
                  <input
                    type="email"
                    name="email"
                    placeholder="メールアドレスを入力"
                  />
                </label>
                <input type="submit" name="submit" value="今すぐ購読" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <a href="index-3.html#" className="scrollToTop">
        <i className="icofont-swoosh-up"></i>
      </a>
    </div>
  );
};

export default SearchFoodPage;
