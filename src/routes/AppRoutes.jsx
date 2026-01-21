import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import Programs from "../pages/Programs.jsx";
import Trainer from "../pages/Trainer.jsx";
import Gallery from "../pages/Gallery.jsx";
import Membership from "../pages/MemberShip.jsx";
import ProgramDetails from "../components/Program/ProgramDetails.jsx";
import ProgramEnquiryForm from "../components/Program/EnquiryForm.jsx";
import TrainerDetails from "../components/Trainer/TrainerDetails.jsx";
import TrainerEnquiryForm from "../components/Trainer/TrainerEnquiryForm.jsx";
import Payment from "../pages/Payment.jsx";
import TimeTable from "../pages/TimeTable.jsx";
import ContactPage from "../pages/ContactPage.jsx";
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
         <Route path="/membership" element={<Membership/>} />
        <Route path="/programs/:id" element={<ProgramDetails/>} />
        <Route path="programs/:id/enquiry" element={<ProgramEnquiryForm/>} />
        <Route path="/trainers/:id" element={<TrainerDetails />} />
<Route path="/trainers/:id/enquiry" element={<TrainerEnquiryForm />} />
<Route path="/timetable" element={<TimeTable/>} />
<Route path="/payment" element={<Payment/>} />
<Route path="/contact" element={<ContactPage/>} />
    </Routes>
    )
}
export default AppRoutes;