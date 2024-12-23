import Food from "api/food";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import auth from "api/auth";

const Header = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        else setSearchResults([t("no_food_found")]);
      } catch (error) {
        console.error("Search error:", error);
      }
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Add new state for filters
  const [filters, setFilters] = useState({
    ingredients: '',
    taste: '',
    tags: '',
    priceRange: { min: '', max: '' }
  });

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFilterApply = async () => {
    const params = new URLSearchParams({
      name: searchTerm || '',
      ingredients: filters.ingredients || '',
      flavors: filters.taste || '',
      tags: filters.tags || '',
      minPrice: filters.priceRange.min || '',
      maxPrice: filters.priceRange.max || '',
    }).toString();

    navigate(`/foods/search?${params}`);
    try {
      await Food.searchFoods({
        name: searchTerm,
        ingredients: filters.ingredients,
        flavors: filters.taste,
        tags: filters.tags,
        minPrice: filters.priceRange.min,
        maxPrice: filters.priceRange.max,
      });
    } catch (error) {
      console.error("Filter apply error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signout();
      navigate('/login');
    } catch (error) {
      console.error('Signout error:', error);
    }
  };

  const handleAccountAction = (value) => {
    switch(value) {
      case "sign_out":
        handleSignOut();
        break;
      case "profile":
        navigate('/profile');
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full">
      {/* Search Area */}
      <div className="fixed inset-0 bg-white z-50 transform scale-0 transition-transform duration-300 ease-in-out">
        <div className="relative p-5">
          <div className="absolute top-5 right-5 w-12 h-12 cursor-pointer">
            <span className="absolute w-full h-0.5 bg-gray-800 transform rotate-45"></span>
            <span className="absolute w-full h-0.5 bg-gray-800 transform -rotate-45"></span>
          </div>
          <form className="w-full max-w-3xl mx-auto mt-20">
            <input
              type="text"
              placeholder={t("search_here")}
              className="w-full text-center text-4xl border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
            />
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="xl:hidden">
        <nav className="flex items-center justify-between bg-white shadow-sm px-4 py-2">
          <div className="logo">
            <a href="/" className="block">
              <img
                src="/assets/images/logo/01.png"
                alt="logo"
                className="h-12"
              />
            </a>
          </div>
          <button className="flex flex-col space-y-1.5">
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </nav>
      </div>

      {/* Desktop Header */}
      <header className="hidden xl:block container pb-3 pt-4 transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img
                src="/assets/images/logo/01.png"
                alt="logo"
                className="h-16"
              />
            </a>
          </div>

          {/* Search and Menu */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder={t("enter_here")}
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onBlur={() => {
                  if (!hasNameParam) {
                    setSearchTerm("");
                    setSearchResults([]);
                  }
                }}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={() => handleSearch(searchTerm)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-2 rounded-e-md h-full w-16"
              >
                <i className="icofont-search-2"></i>
              </button>

              {/* Dropdown Menu Button */}
              <button
                onClick={toggleDropdown}
                className="absolute right-[70px] top-1/2 transform -translate-y-1/2 bg-white text-red-500 p-2 rounded-md w-8"
              >
                <i className="icofont-filter"></i>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-300 rounded-md shadow-lg z-10 p-4">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("ingredients")}
                      </label>
                      <input
                        type="text"
                        value={filters.ingredients}
                        onChange={(e) => handleFilterChange('ingredients', e.target.value)}
                        placeholder={t("enter_ingredients")}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("taste")}
                      </label>
                      <input
                        type="text"
                        value={filters.taste}
                        onChange={(e) => handleFilterChange('taste', e.target.value)}
                        placeholder={t("enter_taste")}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("tags")}
                      </label>
                      <input
                        type="text"
                        value={filters.tags}
                        onChange={(e) => handleFilterChange('tags', e.target.value)}
                        placeholder={t("enter_tags")}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t("price_range")}
                      </label>
                      <div className="flex space-x-2">
                        <input
                          type="number"
                          value={filters.priceRange.min}
                          onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, min: e.target.value })}
                          placeholder={t("min_price")}
                          className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                        <input
                          type="number"
                          value={filters.priceRange.max}
                          onChange={(e) => handleFilterChange('priceRange', { ...filters.priceRange, max: e.target.value })}
                          placeholder={t("max_price")}
                          className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        handleFilterApply();
                        setDropdownOpen(false);
                      }}
                      className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                    >
                      {t("apply_filters")}
                    </button>
                  </form>
                </div>
              )}

              {/* Search Results Dropdown */}
              {searchResults.length > 0 && !hasNameParam && (
                <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {searchResults[0] !== t("no_food_found") ? (
                    <ul>
                      {searchResults.map((item, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            navigate(`/foods/${item.id}`);
                            setSearchTerm("");
                            setSearchResults([]);
                          }}
                          className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
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
                  ) : (
                    <div className="p-5 text-center text-gray-400">
                      {t("no_food_found")}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation Menu */}
            <nav className="border-t border-gray-100">
              <ul className="flex justify-between items-center mt-4">
                <li>
                  <Link
                    to="/"
                    className={`inline-flex items-center px-1 pb-2 text-base font-bold leading-5 transition duration-150 ease-in-out border-b-2 
                      ${location.pathname === "/" ? "text-red-500 border-red-500" : "text-gray-900 border-transparent hover:text-red-500 hover:border-red-500"}`}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/choose-by-tag"
                    className={`inline-flex items-center px-1 pb-2 text-base font-bold leading-5 transition duration-150 ease-in-out border-b-2 
                      ${location.pathname === "/choose-by-tag" ? "text-red-500 border-red-500" : "text-gray-900 border-transparent hover:text-red-500 hover:border-red-500"}`}
                  >
                    {t("choose_by_tag")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foods/favourite"
                    className={`inline-flex items-center px-1 pb-2 text-base font-bold leading-5 transition duration-150 ease-in-out border-b-2 
                      ${location.pathname === "/foods/favourite" ? "text-red-500 border-red-500" : "text-gray-900 border-transparent hover:text-red-500 hover:border-red-500"}`}
                  >
                    {t("favorite_foods")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tags"
                    className={`inline-flex items-center px-1 pb-2 text-base font-bold leading-5 transition duration-150 ease-in-out border-b-2 
                      ${location.pathname === "/tags" ? "text-red-500 border-red-500" : "text-gray-900 border-transparent hover:text-red-500 hover:border-red-500"}`}
                  >
                    {t("tags")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/foods/share-food"
                    className={`inline-flex items-center px-1 pb-2 text-base font-bold leading-5 transition duration-150 ease-in-out border-b-2 
                      ${location.pathname === "/foods/share-food" ? "text-red-500 border-red-500" : "text-gray-900 border-transparent hover:text-red-500 hover:border-red-500"}`}
                  >
                    {t("share_food")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Language and User Account */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <img
                src="/assets/images/header/01.png"
                alt="language"
                className="w-6 h-6"
              />
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                className="border-none bg-transparent focus:outline-none"
              >
                <option value="ja">日本語</option>
                <option value="vi">Tiếng Việt</option>
              </select>
            </div>

            {/* User Account */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="/assets/images/chef/author/08.jpg"
                  alt="author"
                  className="w-full h-full object-cover"
                />
              </div>
              <select 
                className="border-none bg-transparent focus:outline-none"
                onChange={(e) => handleAccountAction(e.target.value)}
              >
                <option value="my_account">{t("my_account")}</option>
                <option value="profile">{t("profile")}</option>
                <option value="set_favorite_tags">{t("set_favorite_tags")}</option>
                <option value="sign_out">{t("sign_out")}</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
