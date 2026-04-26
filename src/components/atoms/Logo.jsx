const Logo = ({ className = "" }) => {
  return (
    <h1 className={`font-primary text-tertiary/50 dark:text-secondary/50 ${className}`}>
      <span className="text-tertiary dark:text-secondary font-bold">AGIL</span> DESTA
    </h1>
  );
};

export default Logo;