import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";
import ForgetPassword from "views/pages/forget-password-page";
import ResetPassword from "views/pages/reset-password-page";
import Profile from "views/pages/profile.jsx";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';
import FoodDetailPage from "views/pages/food-detail-page/FoodDetailPage";
import SearchFoodPage from "views/pages/search-foods-page/SearchFoodPage";
import TagPage from "views/pages/tags-page/TagPage";
import FavoriteFoodPage from "views/pages/favouritefoodpage";
import ShareFoodPage from "views/pages/sharefoodpage";
import Login from "views/pages/login-page";
import Signup from "views/pages/signup-page";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
            <Route path="/random-wheel" element={<MainLayout><RandomWheel /></MainLayout>} />
            <Route path="/choose-by-tag" element={<MainLayout><ChooseByTagPage /></MainLayout>} />
            <Route path="foods">
                <Route path="favorite" element={<MainLayout><FavoriteFoodPage /></MainLayout>} />
                <Route path="share-food" element={<MainLayout><ShareFoodPage /></MainLayout>} />
                <Route path=":foodId" element={<MainLayout><FoodDetailPage /></MainLayout>} />
                <Route path="search" element={<MainLayout><SearchFoodPage /></MainLayout>} />
            </Route>
            <Route path="/tags" element={<MainLayout><TagPage /></MainLayout>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/forget-password/reset-password/:token" element={<ResetPassword />} />
            <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        </Routes>
    );
}

export default AllRoutes
