
const Homepage = () => {
    return (
        <div>
            {/* <div class="preloader"><div class="load loade"><hr /><hr /><hr /><hr /></div></div> */}


            <div class="search-area">
                <div class="search-input">
                    <div class="search-close">
                        <span></span>
                        <span></span>
                    </div>
                    <form>
                        <input type="text" name="text" placeholder="*Search Here......." />
                    </form>
                </div>
            </div>

            <div class="mobile-menu">
                <nav class="mobile-header d-xl-none">
                    <div class="header-logo">
                        <a href="index.html" class="logo"><img src="assets/images/logo/01.png" alt="logo" /></a>
                    </div>
                    <div class="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav class="menu">
                    <div class="mobile-menu-area d-xl-none">
                        <div class="mobile-menu-area-inner" id="scrollbar">
                            <div class="mobile-search">
                                <input type="text" placeholder="Search Here........." />
                                <button type="submit"><i class="icofont-search-2"></i></button>
                            </div>
                            <ul>
                                <li>
                                    <a class="active" href="index-3.html#0">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home Page One</a></li>
                                        <li><a href="index-2.html">Home Page Two</a></li>
                                        <li><a class="active" href="index-3.html">Home Page</a></li>
                                        <li><a href="index-4.html">Home Page Four</a></li>
                                        <li><a href="index-5.html">Home Page Five</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li>
                                    <a href="index-3.html#0">Pages</a>
                                    <ul>
                                        <li>
                                            <a href="index-3.html#0">Category</a>
                                            <ul>
                                                <li><a href="food-menu.html">Food Category</a></li>
                                                <li><a href="menu-card.html">Category style 1</a></li>
                                                <li><a href="menu-card-2.html">Category style 2</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="index-3.html#0">Chef</a>
                                            <ul>
                                                <li><a href="homechef.html">Home Chef</a></li>
                                                <li><a href="homechef-single.html">Home Chef Single</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="recepi-single.html">Single Recipe</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index-3.html#0">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Blog</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="index-3.html#0">Shop</a>
                                    <ul>
                                        <li><a href="shop-page.html">Shop Page</a></li>
                                        <li><a href="shop-single.html">Shop Single style-1</a></li>
                                        <li><a href="shop-single-2.html">Shop Single style-2</a></li>
                                        <li><a href="cart-page.html">Cart Page</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact-us.html">Contact</a></li>
                            </ul>
                            <div class="scocial-media">
                                <a href="index-3.html#" class="facebook"><i class="icofont-facebook"></i></a>
                                <a href="index-3.html#" class="twitter"><i class="icofont-twitter"></i></a>
                                <a href="index-3.html#" class="linkedin"><i class="icofont-linkedin"></i></a>
                                <a href="index-3.html#" class="vimeo"><i class="icofont-vimeo"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <header class="header-section header-3 d-xl-block d-none">
                <div class="container">
                    <div class="">
                        <div class="header-top w-100">
                            <div class="logo">
                                <a href="index.html"><img src="assets/images/logo/01.png" alt="logo" /></a>
                            </div>
                            <div class="menu-search-form">
                                <div class="widget-search">
                                    <form action="https://foxcoders.com/" method="get">
                                        <input type="text" placeholder="Type here and press enter..." name="s" />
                                        <button type="submit"><i class="icofont-search-2"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div class="scocial-media">
                                <a href="index-3.html#" class="facebook"><i class="icofont-facebook"></i></a>
                                <a href="index-3.html#" class="twitter"><i class="icofont-twitter"></i></a>
                                <a href="index-3.html#" class="linkedin"><i class="icofont-linkedin"></i></a>
                                <a href="index-3.html#" class="vimeo"><i class="icofont-vimeo"></i></a>
                            </div>
                        </div>
                        <div class="header-bottom w-100">
                            <div class="main-menu">
                                <ul>
                                    <li>
                                        <a class="active" href="index-3.html#0">Home</a>
                                        {/* <ul>
                                            <li><a href="index.html">Home Page One</a></li>
                                            <li><a href="index-2.html">Home Page Two</a></li>
                                            <li><a class="active" href="index-3.html">Home Page Three</a></li>
                                            <li><a href="index-4.html">Home Page Four</a></li>
                                            <li><a href="index-5.html">Home Page Five</a></li>
                                        </ul> */}
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li>
                                        <a href="index-3.html#0">Pages</a>
                                        <ul>
                                            <li>
                                                <a href="index-3.html#0">Category</a>
                                                <ul>
                                                    <li><a href="food-menu.html">Food Category</a></li>
                                                    <li><a href="menu-card.html">Category style 1</a></li>
                                                    <li><a href="menu-card-2.html">Category style 2</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="index-3.html#0">Chef</a>
                                                <ul>
                                                    <li><a href="homechef.html">Home Chef</a></li>
                                                    <li><a href="homechef-single.html">Home Chef Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="recepi-single.html">Single Recipe</a></li>
                                            <li><a href="404.html">404 Page</a></li>
                                            <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-3.html#0">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="index-3.html#0">Shop</a>
                                        <ul>
                                            <li><a href="shop-page.html">Shop Page</a></li>
                                            <li><a href="shop-single.html">Shop Single style-1</a></li>
                                            <li><a href="shop-single-2.html">Shop Single style-2</a></li>
                                            <li><a href="cart-page.html">Cart Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                </ul>
                            </div>
                            <div class="author-option">
                                <div class="author-area">
                                    <div class="city-lang">
                                        <img src="assets/images/header/01.png" alt="city-lang" />
                                        <select name="lang" id="lang">
                                            <option value="1">ENG</option>
                                            <option value="2">BAN</option>
                                            <option value="3">ESP</option>
                                        </select>
                                    </div>
                                    <div class="cart-option">
                                        <img src="assets/images/header/cart.png" alt="shop-cart" />
                                        <div class="count-item">04</div>
                                        <div class="cart-content">
                                            <div class="cart-title">
                                                <div class="add-item">4 Items Added</div>
                                                <div class="list-close"><a href="index-3.html#">Close</a></div>
                                            </div>
                                            <div class="cart-scr scrollbar">
                                                <div class="cart-con-item">
                                                    <div class="cart-item">
                                                        <div class="cart-inner">
                                                            <div class="cart-top">
                                                                <div class="thumb">
                                                                    <a href="index-3.html#"><img src="assets/images/popular-food/01.jpg" alt="" /></a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                                                </div>
                                                                <div class="remove-btn">
                                                                    <a href="index-3.html#"><i class="icofont-close"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <div class="sing-price">Tk. 140</div>
                                                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                    <div class="dec qtybutton">-</div>
                                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                                    <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                <div class="total-price">Tk. 280.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cart-item">
                                                        <div class="cart-inner">
                                                            <div class="cart-top">
                                                                <div class="thumb">
                                                                    <a href="index-3.html#"><img src="assets/images/popular-food/02.jpg" alt="" /></a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                                                </div>
                                                                <div class="remove-btn">
                                                                    <a href="index-3.html#"><i class="icofont-close"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <div class="sing-price">Tk. 140</div>
                                                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                    <div class="dec qtybutton">-</div>
                                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                                    <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                <div class="total-price">Tk. 280.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cart-item">
                                                        <div class="cart-inner">
                                                            <div class="cart-top">
                                                                <div class="thumb">
                                                                    <a href="index-3.html#"><img src="assets/images/popular-food/03.jpg" alt="" /></a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                                                </div>
                                                                <div class="remove-btn">
                                                                    <a href="index-3.html#"><i class="icofont-close"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <div class="sing-price">Tk. 140</div>
                                                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                    <div class="dec qtybutton">-</div>
                                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                                    <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                <div class="total-price">Tk. 280.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="cart-item">
                                                        <div class="cart-inner">
                                                            <div class="cart-top">
                                                                <div class="thumb">
                                                                    <a href="index-3.html#"><img src="assets/images/popular-food/04.jpg" alt="" /></a>
                                                                </div>
                                                                <div class="content">
                                                                    <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                                                </div>
                                                                <div class="remove-btn">
                                                                    <a href="index-3.html#"><i class="icofont-close"></i></a>
                                                                </div>
                                                            </div>
                                                            <div class="cart-bottom">
                                                                <div class="sing-price">Tk. 140</div>
                                                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                    <div class="dec qtybutton">-</div>
                                                                    <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                                                    <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                <div class="total-price">Tk. 280.00</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="cart-scr-bottom">
                                                <ul>
                                                    <li>
                                                        <div class="title">Subtotal</div>
                                                        <div class="price">Tk. 1045.00</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">Shipping</div>
                                                        <div class="price">Tk. 40.00</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">Cart Total</div>
                                                        <div class="price">Tk. 1085.00</div>
                                                    </li>
                                                </ul>
                                                <a href="index-3.html#" class="food-btn"><span>Place Order</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="author-account">
                                        <div class="author-icon">
                                            <img src="assets/images/chef/author/08.jpg" alt="author" />
                                        </div>
                                        <div class="author-select">
                                            <select name="author-select" id="author-select">
                                                <option value="1">My Account </option>
                                                <option value="2">Log Out </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                        <h4>Recent Recipes</h4>
                        <a href="index-3.html#" class="text-btn">All Recipes<i class="icofont-rounded-double-right"></i></a>
                    </div>
                    <div class="section-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-xl-4 col-md-6 col-12">
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
                            </div>
                            <div class="col-xl-4 col-md-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <a href="index-3.html#"> <img src="assets/images/food-recipe/02.jpg" alt="food-recipe" /></a>
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
                            </div>
                            <div class="col-xl-4 col-md-6 col-12">
                                <div class="recipe-item">
                                    <div class="recipe-thumb">
                                        <a href="index-3.html#"> <img src="assets/images/food-recipe/03.jpg" alt="food-recipe" /></a>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="blog-section overflow-hidden padding-tb bg-body home-3 pb-0">
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
            </section>

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

            <footer class="footer">
                <div class="bg-shape-style"></div>
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-area text-center">
                            <div class="footer-logo">
                                <a href="index.html"><img src="assets/images/header/footer/01.png" alt="footer-logo" /></a>
                            </div>
                            <div class="scocial-media">
                                <a href="index-3.html#" class="facebook"><i class="icofont-facebook"></i></a>
                                <a href="index-3.html#" class="twitter"><i class="icofont-twitter"></i></a>
                                <a href="index-3.html#" class="linkedin"><i class="icofont-linkedin"></i></a>
                                <a href="index-3.html#" class="vimeo"><i class="icofont-vimeo"></i></a>
                            </div>
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="index-3.html#">Home</a></li>
                                    <li><a href="index-3.html#">How it works?</a></li>
                                    <li><a href="index-3.html#">Menus</a></li>
                                    <li><a href="index-3.html#">Chefs</a></li>
                                    <li><a href="index-3.html#">Recipes</a></li>
                                    <li><a href="index-3.html#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom text-center">
                        <p>&copy; 2021 <a href="index-3.html#"><span>Mezban</span></a> Design by <a href="index-3.html#"><span>FoxCoders</span></a>.</p>
                    </div>
                </div>
            </footer>


            <a href="index-3.html#" class="scrollToTop"><i class="icofont-swoosh-up"></i></a>



            <script src="assets/js/jquery.js"></script>
            <script src="assets/js/waypoints.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/isotope.pkgd.min.js"></script>
            <script src="assets/js/wow.min.js"></script>
            <script src="assets/js/swiper.min.js"></script>
            <script src="assets/js/tab.js"></script>
            <script src="assets/js/lightcase.js"></script>
            <script src="assets/js/jquery.counterup.min.js"></script>
            <script src="assets/js/functions.js"></script>
        </div>
    )
}

export default Homepage;