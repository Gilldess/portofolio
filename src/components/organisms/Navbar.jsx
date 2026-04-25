import { useState } from "react";
import Logo from "../atoms/Logo";
import NavList from "../molecules/NavList";
import HamburgerButton from "../molecules/HambugerButton";
import { FiMoon, FiSun } from "react-icons/fi";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Works", href: "/works" },
  { title: "Contact", href: "/contact" },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center relative z-50">
      <Logo className="text-size-secondary md:text-size-primary" />
      <div className="flex gap-6 items-center">
          <button
          onClick={() => setIsDark(!isDark)}
          className="relative w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 overflow-hidden"
          >
            <FiSun  
              className={`absolute text-base transform transition-all duration-500 ease-in-out ${
                isDark 
                  ? 'opacity-0 scale-50 rotate-90'
                  : 'opacity-100 scale-100 rotate-0'
              }`}
            />
            <FiMoon
              className={`absolute text-base text-slate-200 transform transition-all duration-500 ease-in-out ${
                isDark 
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-50 -rotate-90'
              }`}
            />
          </button>
          <NavList items={navigation} />
          <HamburgerButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            items={navigation}
          />
      </div>
    </nav>
  );
};

export default Navbar;
