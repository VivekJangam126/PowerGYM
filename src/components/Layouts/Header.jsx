import { useState } from "react";
import { Menu, X, User, Share2 } from "lucide-react";
import phoneImg from "../../assets/insta.png";
import whats from "../../assets/whats.png";
import face from "../../assets/face.png";
import logo from "../../assets/logo2.png";
import LoginModal from "../auth/login.jsx";
import RegisterModal from "../auth/register.jsx";

function Header() {
  const [activePanel, setActivePanel] = useState(null); 
  // "menu" | "auth" | "social" | null

  const [open, setOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  const openLogin = () => {
    setAuthType("login");
    setOpen(true);
    setActivePanel(null);
  };

  const openRegister = () => {
    setAuthType("register");
    setOpen(true);
    setActivePanel(null);
  };

  return (
    <header className="sticky top-0 z-50  bg-[#222831] text-[#EEEEEE] select-none ">
      
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            Power GYM
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-4 ">
          {["Home", "About", "Programs", "Trainer", "Gallery"].map(item => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                         hover:bg-[#00ADB5] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={openLogin}
            className="bg-[#393E46] px-3 py-1 rounded hover:bg-[#00ADB5]"
          >
            Login
          </button>
          <button
            onClick={openRegister}
            className="bg-[#393E46] px-3 py-1 rounded hover:bg-[#00ADB5]"
          >
            Register
          </button>

          <div className="hidden lg:flex items-center gap-2">
  <span className="text-sm">Follow Us:</span>
  <img src={phoneImg} className="w-6 h-6" />
  <img src={face} className="w-6 h-6" />
  <img src={whats} className="w-6 h-6" />
</div>

        </div>
        </div>

        {/* MOBILE ICON BAR */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() =>
              setActivePanel(activePanel === "menu" ? null : "menu")
            }
            className="p-2 bg-[#EEEEEE] text-[#222831] rounded"
          >
            {activePanel === "menu" ? <X /> : <Menu />}
          </button>

          <button
            onClick={() =>
              setActivePanel(activePanel === "auth" ? null : "auth")
            }
            className="p-2 bg-[#EEEEEE] text-[#222831] rounded"
          >
            {activePanel === "auth" ? <X /> : <User />}
          </button>

          <button
            onClick={() =>
              setActivePanel(activePanel === "social" ? null : "social")
            }
            className="p-2 bg-[#EEEEEE] text-[#222831] rounded mr-2"
          >
            {activePanel === "social" ? <X /> : <Share2 />}
           
          </button>
        </div>
      </div>

      {/* MOBILE PANELS */}
      {activePanel === "menu" && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {["Home", "About", "Programs", "Trainer", "Gallery"].map(item => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setActivePanel(null)}
              className="bg-[#EEEEEE] text-[#222831] px-4 py-2 rounded hover:bg-[#00ADB5]"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {activePanel === "auth" && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <button
            onClick={openLogin}
            className="bg-[#393E46] py-2 rounded hover:bg-[#00ADB5]"
          >
            Login
          </button>
          <button
            onClick={openRegister}
            className="bg-[#393E46] py-2 rounded hover:bg-[#00ADB5]"
          >
            Register
          </button>
        </div>
      )}

      {activePanel === "social" && (
        <div className="md:hidden px-4 pb-4 flex gap-4 items-center">
          <img src={phoneImg} className="w-7 h-7 hover:scale-110" />
          <img src={face} className="w-7 h-7 hover:scale-110" />
          <img src={whats} className="w-7 h-7 hover:scale-110" />
        </div>
      )}

      {/* MODALS */}
      <LoginModal
        isOpen={open && authType === "login"}
        onClose={() => {
          setOpen(false);
          setAuthType(null);
        }}
        onSwitchToRegister={() => setAuthType("register")}
      />

      <RegisterModal
        isOpen={open && authType === "register"}
        onClose={() => {
          setOpen(false);
          setAuthType(null);
        }}
        onSwitchToLogin={() => setAuthType("login")}
      />
    </header>
  );
}

export default Header;
