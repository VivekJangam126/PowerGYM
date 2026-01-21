import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo2.png";
import ContactForm from "./ContactModal.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const openContact = () => {
    setOpen(true);
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Programs", path: "/programs" },
    { name: "Trainers", path: "/trainer" },
    { name: "Timetable", path: "/timetable" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Membership", path: "/membership" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Power GYM" className="w-20 h-20 rounded-full" />
          <h1 className="text-2xl font-bold tracking-wide">
            Power<span className="text-red-600">GYM</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.path}
              className="text-sm uppercase tracking-wide text-white/80 hover:text-red-500 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={openContact}
            className="bg-red-600 px-5 py-2 rounded font-semibold hover:bg-red-700 transition"
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border border-white/20 rounded"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 uppercase tracking-wide hover:text-red-500"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={openContact}
            className="mt-3 bg-red-600 py-2 rounded font-semibold hover:bg-red-700"
          >
            Enquire Now
          </button>
        </div>
      )}

      {/* Contact Modal */}
      <ContactForm
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}

export default Header;
