const variant = {
    sizeprimary: "text-size-secondary lg:text-size-tertiary",
    sizesecondary: "text-size-quaternary lg:text-size-tertiary",
}

const Paragraph = ({ children, className= "", variantsize }) => {
    return (
        <p className={`${className} ${variant[variantsize] || variant.sizeprimary}`}>
            {children}
        </p>
    )
}

export default Paragraph