import Food from "api/food";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { t, i18n } = useTranslation();

    const [searchResults, setSearchResults] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const queryName = searchParams.get("name");
    const hasNameParam = searchParams.has("name");

    const handleInputChange = async (e) => {
        setSearchTerm(e.target.value);
        if (!hasNameParam) {
            await handleSearch(e.target.value);
        } else setSearchParams({ name: e.target.value });
    };

    useEffect(() => {
        setSearchTerm(queryName);
    }, [queryName]);

    const handleKeyDown = (e) => {
        console.log(searchTerm);
        if (e.key === "Enter") {
            e.preventDefault();
            navigate(`/foods/search?name=${searchTerm}`);
        }
    };

    const handleSearch = async (searchTerm) => {
        if (searchTerm) {
            try {
                const response = await Food.searchFoods({ name: searchTerm });
                if (response.data.length > 0) setSearchResults(response.data);
                else setSearchResults(["食べ物は見つかりませんでした。"]);
            } catch (error) {
                console.error("Lỗi tìm kiếm:", error);
            }
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <div className="search-area">
                <div className="search-input">
                    <div className="search-close">
                        <span></span>
                        <span></span>
                    </div>
                    <form>
                        <input type="text" name="text" placeholder={t('search_here')} />
                    </form>
                </div>
            </div>

            <div className="mobile-menu">
                <nav className="mobile-header d-xl-none">
                    <div className="header-logo">
                        <a href="/" className="logo">
                            <img src="assets/images/logo/01.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header-bar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <nav className="menu">
                    <div className="mobile-menu-area d-xl-none">
                        <div className="mobile-menu-area-inner" id="scrollbar">
                            <div className="mobile-search">
                                <input type="text" placeholder={t('search_here')} />
                                <button type="submit">
                                    <i className="icofont-search-2"></i>
                                </button>
                            </div>
                            <ul>
                                <li>
                                    <a className="active" href="/">
                                        {t('home')}
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="index.html">{t('home_page_one')}</a>
                                        </li>
                                        <li>
                                            <a href="index-2.html">{t('home_page_two')}</a>
                                        </li>
                                        <li>
                                            <a className="active" href="index-3.html">
                                                {t('home_page')}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-4.html">{t('home_page_four')}</a>
                                        </li>
                                        <li>
                                            <a href="index-5.html">{t('home_page_five')}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="scocial-media">
                                <a href="index-3.html#" className="facebook">
                                    <i className="icofont-facebook"></i>
                                </a>
                                <a href="index-3.html#" className="twitter">
                                    <i className="icofont-twitter"></i>
                                </a>
                                <a href="index-3.html#" className="linkedin">
                                    <i className="icofont-linkedin"></i>
                                </a>
                                <a href="index-3.html#" className="vimeo">
                                    <i className="icofont-vimeo"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <header className="container header-section header-3 d-xl-block d-none my-0">
                <div className="container" style={{ padding: 0 }}>
                    <div className="">
                        <div className="header-top w-100">
                            <div className="logo">
                                <a href="/">
                                    <img src="assets/images/logo/01.png" alt="logo" />
                                </a>
                            </div>
                            <div className="menu-search-form">
                                <div className="widget-search mt-4 relative">
                                    <form>
                                        <input
                                            type="text"
                                            placeholder={t('enter_here')}
                                            name="s"
                                            value={searchTerm}
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyDown}
                                            onBlur={() => {
                                                if (!hasNameParam) {
                                                    setSearchTerm("");
                                                    setSearchResults([]);
                                                }
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleSearch(searchTerm)}
                                        >
                                            <i className="icofont-search-2"></i>
                                        </button>
                                    </form>
                                </div>
                                {searchResults.length > 0 &&
                                    searchResults[0] !== t('no_food_found') &&
                                    !hasNameParam ? (
                                    <div className="search-results absolute w-[607.67px] mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                        <ul>
                                            {searchResults.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="p-2 cursor-pointer hover:bg-gray-100 flex items-center space-x-4"
                                                    onClick={() => {
                                                        navigate(`/foods/${item.id}`);
                                                        setSearchTerm("");
                                                        setSearchResults([]);
                                                    }}
                                                >
                                                    {item.image && (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-12 h-12 object-cover rounded-full"
                                                        />
                                                    )}
                                                    <div>
                                                        <p className="font-semibold text-gray-800">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-sm text-gray-400 italic">
                                                            {item.price} VND
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    searchResults.length > 0 &&
                                    !hasNameParam && (
                                        <div className="search-results absolute w-[607.67px] text-gray-400 h-20 px-5 flex justify-center items-center mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                            {t('no_food_found')}
                                        </div>
                                    )
                                )}

                                <div style={{ width: "100%" }} className="header-bottom ">
                                    <div className="main-menu w-100">
                                        <ul>
                                            <li>
                                                <a className="active" href="/">
                                                    {t('home')}
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="#">
                                                    {t('recipe_list')}
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="#">
                                                    {t('decide_recipe')}
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="#">
                                                    {t('share_recipe')}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex ">
                                <div className="city-lang ">
                                    <img src="assets/images/header/01.png" alt="city-lang" />
                                    <select
                                        name="lang"
                                        id="lang"
                                        onChange={(e) => changeLanguage(e.target.value)}
                                    >
                                        <option value="ja">日本語</option>
                                        <option value="vi">Tiếng Việt</option>
                                    </select>
                                </div>
                                <div className="author-account">
                                    <div className="author-icon">
                                        <img src="assets/images/chef/author/08.jpg" alt="author" />
                                    </div>
                                    <div className="author-select">
                                        <select name="author-select" id="author-select">
                                            <option value="1">{t('my_account')}</option>
                                            <option value="1.25">{t('profile')}</option>
                                            <option value="1.5">{t('set_favorite_tags')}</option>
                                            <option value="2">{t('sign_out')}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
