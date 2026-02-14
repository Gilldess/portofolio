import { useState } from "react";
import NavLink from "../atoms/NavLink";

const NavList = ({ items }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (
    <div className="text-tertiary hidden md:flex gap-3 text-size-tertiary font-primary">
      {items.map((item, index) => (
        <NavLink
          key={item.title}
          to={item.href}
          isActive={hoverIndex === index}
          onMouseEnter={() => setHoverIndex(index)}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavList;