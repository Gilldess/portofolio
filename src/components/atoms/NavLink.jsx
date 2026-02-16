import { Link } from "react-router";

const NavLink = ({ to, children, isActive, onMouseEnter }) => (
  <Link
    to={to}
    onMouseEnter={onMouseEnter}
    className={`px-2.5 py-1.5 rounded-md transition-colors ${
      isActive ? "bg-primary" : "bg-transparent"
    }`}
  >
    {children}
  </Link>
);

export default NavLink;