const variant = {
    sizeprimary: "text-4xl lg:text-5xl",
    sizesecondary: "text-3xl lg:text-4xl",
}
const Heading = ({level, children, className= "", variantsize}) => {
    const Title = `h${level}`;

    return (
        <Title className={`${className} ${variant[variantsize] || variant.mediumbold}`}>
            {children}
        </Title>
    );
}

export default Heading