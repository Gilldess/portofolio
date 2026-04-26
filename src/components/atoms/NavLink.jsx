import { Link } from "react-scroll";

const NavLink = ({ to, isActive, onMouseEnter, children, className }) => {
  // react-scroll tidak butuh tanda pagar (#), jadi kita hilangkan
  const targetId = to.replace("#", "");

  return (
    <Link
      to={targetId}
      smooth={true}
      duration={500}
      offset={-100}     
      onMouseEnter={onMouseEnter}
      className={`cursor-pointer transition-colors duration-300 ${className} ${
        isActive ? "text-primary" : "text-tertiary dark:text-secondary hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;