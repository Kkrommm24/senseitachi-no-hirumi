import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';
import FoodDetailPage from "views/pages/food-detail-page/FoodDetailPage";
import SearchFoodPage from "views/pages/search-foods-page/SearchFoodPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
            <Route path="/random-wheel" element={<MainLayout><RandomWheel /></MainLayout>} />
            <Route path="/choose-by-tag" element={<MainLayout><ChooseByTagPage /></MainLayout>} />
            <Route path="/foods/:foodId" element={<MainLayout><FoodDetailPage /></MainLayout>} />
            <Route path="/foods/search" element={<MainLayout><SearchFoodPage /></MainLayout>} />
        </Routes>
    );
}

export default AllRoutes
