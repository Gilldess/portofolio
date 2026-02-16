import { useState } from "react";
import Logo from "../atoms/Logo";
import NavList from "../molecules/NavList";
import HamburgerButton from "../molecules/HambugerButton";

const navigation = [
  { title: "Home", href: "/" },
  { title: "Works", href: "/works" },
  { title: "Contact", href: "/contact" },
  { title: "Resume", href: "/resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center relative z-50">
      <Logo className="text-size-secondary md:text-size-primary" />
      <NavList items={navigation} />
      <HamburgerButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        items={navigation}
      />
    </nav>
  );
};

export default Navbar;
