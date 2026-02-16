const variant = {
    sizeprimary: "font-bold text-size-quaternary lg:text-size-tertiary px-4 py-2",
    sizesecondary: "font-semibold text-size-quaternary lg:text-size-tertiary px-2 py-1",
};

const Button = ({ children, className = "bg-primary", onClick, variantsize }) => {
    return (
        <button 
        className={`border-none rounded-md ${className} ${variant[variantsize] || variant.sizeprimary}`}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;