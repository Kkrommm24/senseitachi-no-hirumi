import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';
import FavoriteFoodPage from "views/pages/favouritefoodpage";
import FoodDetailPage from "views/pages/food-detail-page/FoodDetailPage";
import SearchFoodPage from "views/pages/search-foods-page/SearchFoodPage";
import TagPage from "views/pages/tags-page/TagPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
            <Route path="/random-wheel" element={<MainLayout><RandomWheel /></MainLayout>} />
            <Route path="/choose-by-tag" element={<MainLayout><ChooseByTagPage /></MainLayout>} />
            <Route path="foods" element={<MainLayout />}>
                <Route path="favorite" element={<FavoriteFoodPage />} />
                <Route path=":foodId" element={<FoodDetailPage />} />
                <Route path="search" element={<SearchFoodPage />} />
            </Route>
            <Route path="/tags" element={<MainLayout><TagPage /></MainLayout>} />
        </Routes>
    );
}

export default AllRoutes
