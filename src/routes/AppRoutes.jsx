import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage.jsx";

function AppRoutes() {  
    return(
    <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/login" element={<HomePage /> } />
         <Route path="/register" element={<HomePage /> } />
    </Routes>
    )
}
export default AppRoutes;