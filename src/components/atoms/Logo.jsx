const Logo = ({ className = "" }) => {
  return (
    <h1 className={`font-primary text-tertiary/50 ${className}`}>
      <span className="text-tertiary font-bold">AGIL</span> DESTA
    </h1>
  );
};

export default Logo;