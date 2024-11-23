import { Routes, Route } from "react-router-dom";
import MainLayout from 'components/layout';
import ChooseByTagPage from "views/pages/choosebytagpage/ChooseByTagPage";

import Homepage from 'views/pages/homepage'
import RandomWheel from 'views/pages/wheelpage/RandomWheel.jsx';

function AllRoutes() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                <Route path="/" element={<MainLayout children={<Homepage />}/>} />
                <Route path="/random-wheel" element={<MainLayout children={<RandomWheel />}/>} />
                <Route path="/choose-by-tag" element={<ChooseByTagPage />} />
            </Routes>
        </>
    )
}

export default AllRoutes
