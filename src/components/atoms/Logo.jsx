const Logo = ({ className = "" }) => {
  return (
    <h1 className={`font-primary text-tertiary/50 ${className}`}>
      <span className="text-tertiary font-bold">Agil</span> Desta
    </h1>
  );
};

export default Logo;