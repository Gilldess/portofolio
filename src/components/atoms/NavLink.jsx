import { Link } from "react-router";

const NavLink = ({ to, children, isActive, onMouseEnter }) => (
  <Link
    to={to}
    onMouseEnter={onMouseEnter}
    className={`px-2 py-1 rounded-md transition-all duration-500 border-b-3 ${
      isActive ? "border-primary" : "border-transparent"
    }`}
  >
    {children}
  </Link>
);

export default NavLink;