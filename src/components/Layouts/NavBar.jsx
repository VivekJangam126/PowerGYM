import { useState } from "react";
import logo from "../../assets/logo2.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#393E46] text-[#EEEEEE] w-full px-5 select-none  md:flex-row">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
            Power GYM
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-4">
          {["Home", "About", "Programs", "Trainer", "Gallery"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                             hover:bg-[#00ADB5] transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                     hover:bg-[#00ADB5] transition-colors"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-3 pb-4">
          {["Home", "About", "Programs", "Trainer", "Gallery"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block bg-[#EEEEEE] text-[#222831] px-4 py-2 rounded
                             hover:bg-[#00ADB5] transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
