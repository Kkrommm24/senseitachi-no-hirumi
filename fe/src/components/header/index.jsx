const Header = () => {
    const options = [
        { value: "1", label: "My Account" },
        { value: "3", label: "Profile" },
        { value: "4", label: "Set Favorite Tags" },
        { value: "5", label: "Manage Recipes (Admin)" },
        { value: "6", label: "Recipe List" },
        { value: "7", label: "Decide Recipe" },
        { value: "8", label: "Share Recipe" },
        { value: "9", label: "Sign Out" }
    ];
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
                <div class="container" style={{ padding: 0 }}>
                    <div class="">
                        <div class="header-top w-100">
                            <div class="logo">
                                <a href="index.html"><img src="assets/images/logo/01.png" alt="logo" /></a>
                            </div>
                            <div class="menu-search-form">
                                <div class="widget-search mt-4">
                                    <form action="https://foxcoders.com/" method="get">
                                        <input type="text" placeholder="ここに入力して「エンター」キーを押してください..." name="s" />
                                        <button type="submit"><i class="icofont-search-2"></i></button>
                                    </form>
                                </div>
                                <div style={{ width: "100%" }} class="header-bottom ">
                                    <div class="main-menu w-100">
                                        <ul>
                                            <li>
                                                <a class="active" href="index-3.html#0">トップページ</a>
                                            </li>
                                            <li>
                                                <a class="" href="index-3.html#0">料理一覧</a>
                                            </li>
                                            <li>
                                                <a class="" href="index-3.html#0">料理決め</a>
                                            </li>
                                            <li>
                                                <a class="" href="index-3.html#0">料理共有</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex ">
                                <div class="city-lang ">
                                    <img src="assets/images/header/01.png" alt="city-lang" />
                                    <select name="lang" id="lang">
                                        <option value="1">日本語</option>
                                        <option value="2">ベトナム語</option>
                                    </select>
                                </div>
                                <div class="author-account">
                                    <div class="author-icon">
                                        <img src="assets/images/chef/author/08.jpg" alt="author" />
                                    </div>
                                    <div class="author-select">
                                        <select name="author-select" id="author-select">
                                            <option value="1">アカウント</option>
                                            <option value="1.25">プロフィール</option>
                                            <option value="1.5">好きなタグ設定</option>
                                            <option value="2">サインアウト</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
