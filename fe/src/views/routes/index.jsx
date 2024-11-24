import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout><Homepage /></MainLayout>} />
            <Route path="/random-wheel" element={<MainLayout><RandomWheel /></MainLayout>} />
            <Route path="/choose-by-tag" element={<MainLayout><ChooseByTagPage /></MainLayout>} />
        </Routes>
    );
}

export default AllRoutes
