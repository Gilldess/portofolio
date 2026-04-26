const HamburgerButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden relative flex items-center justify-center">
      <button
        className="flex flex-col justify-center items-center w-6 h-6 outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Garis Atas */}
        <div
          className={`w-6 h-0.5 bg-tertiary dark:bg-secondary transition-all duration-500 ${
            isOpen ? "rotate-45 absolute" : "mb-1.5"
          }`}
        ></div>
        
        {/* Garis Tengah */}
        <div
          className={`w-6 h-0.5 bg-tertiary dark:bg-secondary transition-all duration-500 mb-1.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        
        {/* Garis Bawah */}
        <div
          className={`w-6 h-0.5 bg-tertiary dark:bg-secondary transition-all duration-500 ${
            isOpen ? "-rotate-45 absolute" : ""
          }`}
        ></div>
      </button>
    </div>
  );
};

export default HamburgerButton;