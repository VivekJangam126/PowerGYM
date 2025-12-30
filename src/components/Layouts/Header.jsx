import phoneImg from "../../assets/insta.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";
import { useState } from "react";
import   LoginModal from "../auth/login.jsx";
import RegisterModal from "../auth/register.jsx";

function Header() {
  const [open, setOpen] = useState(false);
  const [authType, setauthtype] = useState(null); // "login" or "register"
  return (
    <header
      
    
    className="bg-[#222831] text-[#EEEEEE] w-full px-4 py-2
                 flex flex-col sm:flex-row
                 items-center justify-between
                 gap-2 sm:gap-0 select-none"
    >
      <a
        href="mailto:976656563-abc@gmail.com"
        className="inline-flex items-center px-3 py-1 text-xs sm:text-sm
                   rounded leading-none break-all sm:break-normal
                   hover:text-[#00ADB5] transition-colors"
      >
        Contact Us : +91 976656563
      </a>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm text-[#EEEEEE]">Follow Us :</p>

          <a href="https://www.instagram.com/" className="inline-flex items-center">
            <img src={phoneImg} alt="Instagram" className="w-7 h-7 rounded hover:scale-110 transition-transform" />
          </a>

          <a href="https://www.facebook.com/" className="inline-flex items-center">
            <img src={face} alt="Facebook" className="w-7 h-7 rounded hover:scale-110 transition-transform" />
          </a>

          <a href="https://web.whatsapp.com/" className="inline-flex items-center">
            <img src={whats} alt="WhatsApp" className="w-7 h-7 rounded hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
          
        onClick={() => {
          setauthtype("login")
          setOpen(true); }}
            className="bg-[#393E46] text-[#EEEEEE] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"> Login  </button>
        
          <button
          
        onClick={() => {
          setauthtype("register");
          setOpen(true); }}
            className="bg-[#393E46] text-[#EEEEEE] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors" >Register </button>

<LoginModal
  isOpen={open && authType === "login"}
  onClose={() => {
    setOpen(false);
    setauthtype(null);
  }}
 onSwitchToRegister={() => {
    setauthtype("register");
  }}
/>


<RegisterModal
  isOpen={open && authType === "register"}
  onClose={() => {
    setOpen(false);
    setauthtype(null);
  }}
  onSwitchToLogin={() => {
    setauthtype("login");
  }}
/>

 
          
        </div>
      </div>
    </header>
  );
}

export default Header;
