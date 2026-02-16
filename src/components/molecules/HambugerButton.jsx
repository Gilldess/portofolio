import { Link } from "react-router";

const HamburgerButton = ({ isOpen, setIsOpen, items }) => {
  return (
    <div className="md:hidden relative">
      <button
        className="flex flex-col justify-center items-center w-6 h-6 outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-tertiary transition-all duration-500 ${
            isOpen ? "rotate-45 absolute" : "mb-1.5"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-tertiary transition-all duration-500 mb-1.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-tertiary transition-all duration-500 ${
            isOpen ? "-rotate-45 absolute" : ""
          }`}
        ></div>
      </button>

      <div
        className={`absolute top-10 right-0 text-tertiary text-start font-primary transition-all duration-500 text-size-tertiary flex flex-col gap-4 w-40 rounded-sm p-4 bg-secondary shadow-lg ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            onClick={() => setIsOpen(false)}

          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HamburgerButton;
