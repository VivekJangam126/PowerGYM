import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";

function AppRoutes() {  
    return(
    <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/login" element={<HomePage /> } />
         <Route path="/register" element={<HomePage /> } />
         <Route path="/about" element={<AboutPage/>} />
    </Routes>
    )
}
export default AppRoutes;