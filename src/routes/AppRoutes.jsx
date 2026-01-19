import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import Programs from "../pages/Programs.jsx";
import Trainer from "../pages/Trainer.jsx";
import Gallery from "../pages/Gallery.jsx";
function AppRoutes() {  
    return(
    <Routes>
         <Route path="/home" element={<HomePage /> } />
         <Route path="/" element={<HomePage /> } />
         <Route path="/login" element={<HomePage /> } />
         <Route path="/register" element={<HomePage /> } />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/programs" element={<Programs/>} />
         <Route path="/trainer" element={<Trainer/>} />
         <Route path="/gallery" element={<Gallery/>} />

    </Routes>
    )
}
export default AppRoutes;