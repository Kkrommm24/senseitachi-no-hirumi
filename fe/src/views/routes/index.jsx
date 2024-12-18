import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';
import FoodDetailPage from "views/pages/food-detail-page/FoodDetailPage";
import SearchFoodPage from "views/pages/search-foods-page/SearchFoodPage";
import TagPage from "views/pages/tags-page/TagPage";
import FavoriteFoodPage from "views/pages/favouritefoodpage";
import ShareFoodPage from "views/pages/sharefoodpage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
            <Route path="/random-wheel" element={<MainLayout><RandomWheel /></MainLayout>} />
            <Route path="/choose-by-tag" element={<MainLayout><ChooseByTagPage /></MainLayout>} />
            <Route path="foods">
                <Route path="favorite" element={<MainLayout><FavoriteFoodPage /></MainLayout>} />
                <Route path="share-food" element={<MainLayout><ShareFoodPage /></MainLayout>} />
            </Route>
            <Route path="/foods/:foodId" element={<MainLayout><FoodDetailPage /></MainLayout>} />
            <Route path="/foods/search" element={<MainLayout><SearchFoodPage /></MainLayout>} />
            <Route path="/tags" element={<MainLayout><TagPage /></MainLayout>} />
        </Routes>
    );
}

export default AllRoutes
