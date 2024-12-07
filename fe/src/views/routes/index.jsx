import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';
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
        </Routes>
    );
}

export default AllRoutes
