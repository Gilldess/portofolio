import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; 
import Logo from "../atoms/Logo";
import NavList from "../molecules/NavList";
import HamburgerButton from "../molecules/HambugerButton";
import { FiMoon, FiSun } from "react-icons/fi";

const navigation = [
  { title: "Home", href: "#home" },
  { title: "Works", href: "#projects" },
  { title: "Contact", href: "#contact" },
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
          <FiSun className={`absolute text-base transform transition-all duration-500 ease-in-out ${isDark ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} />
          <FiMoon className={`absolute text-base text-slate-200 transform transition-all duration-500 ease-in-out ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`} />
        </button>

        <div className="hidden md:block">
          <NavList items={navigation} />
        </div>

        <div className="md:hidden relative z-60">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div 
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden z-[55] ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <div className={`fixed top-0 right-0 h-screen w-64 dark:bg-white bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-[55] flex flex-col p-8 pt-24 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col gap-8">
          {navigation.map((item) => (
            <ScrollLink 
              key={item.title} 
              to={item.href.replace("#", "")} 
              smooth={true}
              duration={500}
              offset={-100}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-lg font-medium dark:text-slate-700 text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.title}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;