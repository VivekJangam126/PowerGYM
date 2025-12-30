import logo from '../../assets/logo2.png';

function Nav() {

  
  return (
    <nav className="bg-[#393E46] text-[#EEEEEE] w-full px-5  flex items-center justify-between select-none">
      <div className="flex items-center gap-2">

     
      <p>
        <img src={logo} alt="Logo" className="w-25 h-25 rounded-full" />
      </p>
      <h1 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-wide">
        Power GYM
      </h1>
 </div>
      <ul className="hidden md:flex items-center gap-4">
        <li>
          <a
            href="/"
            className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"
          >
            Programs
          </a>
        </li>

        <li>
          <a
            href="/"
            className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"
          >
            Trainer
          </a>
        </li>

        <li>
          <a
            href="#"
            className="bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                       hover:bg-[#00ADB5] hover:text-[#222831]
                       transition-colors"
          >
            Gallery
          </a>
        </li>
      </ul>

      <button
        className="md:hidden bg-[#EEEEEE] text-[#222831] px-3 py-1 rounded
                   hover:bg-[#00ADB5] hover:text-[#222831]
                   transition-colors"
      >
        Menu
      </button>

    </nav>
  );
}

export default Nav;
