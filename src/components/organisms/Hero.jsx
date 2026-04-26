import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import Profile from "../../assets/img_pp.png";
import { Link } from "react-router";
import { SiNodedotjs, SiReact, SiTailwindcss } from "react-icons/si";
import NavLink from "../atoms/NavLink";

const Hero = ({ children }) => {
  return (
    <div className="flex flex-col gap-8 justify-between xl:justify-center xl:gap-12 md:flex-row items-center">
      {children}
    </div>
  );
};

Hero.Header = ({ children, pargraph}) => {
  return (
    <div className="space-y-2 w-auto lg:w-1/2">
      <Heading level={1} variantsize="sizeprimary" className="font-secondary dark:text-tertiary text-secondary">
        {children}
      </Heading>
      <Paragraph variantsize="variantprimary" className="font-primary dark:text-tertiary/80 text-secondary">{pargraph}</Paragraph>
      <div className="space-x-4 mt-12">
        <Link
        to="https://drive.google.com/file/d/1n8XfHOxnPkcnebZ1L2zoW8-_dLvh1jnw/view?usp=drive_link"
        target="_blank"
        className="w-fit bg-primary/80 mt-2 text-tertiary font-bold text-size-quaternary lg:text-size-tertiary px-4 py-2 rounded-md hover:bg-primary transition-colors duration-300"
        >
          Resume
        </Link>
        <NavLink
        to="#contact"
        className="w-fit bg-secondary/80 !text-tertiary mt-2 border font-bold text-size-quaternary lg:text-size-tertiary px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300"
        >
          Kontak
        </NavLink>
      </div>
    </div>
  );
};
Hero.Body = () => {
  return (
    <div className="relative mx-auto xl:mx-0 mt-10 md:mt-0">
      <div className="absolute -bottom-9 left-3 md:left-7 w-[90%] h-[90%] rounded-full bg-primary/90 z-0"></div>

      <div className="relative overflow-hidden w-64 sm:w-72 md:w-80 xl:w-100 h-auto">
        <Image
          src={Profile}
          alt="profile"
          className="relative z-10 w-full h-auto object-cover"
        />
      </div>

      <div className="w-18 h-18 md:w-28 md:h-28 xl:w-32 xl:h-32 absolute -bottom-2 left-3 md:-left-5 z-20 flex justify-center items-center bg-secondary shadow-lg rounded-full p-3 md:p-5">
        <SiReact className="w-full h-full text-[#61DAFB] animate-[spin_10s_linear_infinite]" />
      </div>
      <div className="w-14 h-14 md:w-20 md:h-20 xl:w-24 xl:h-24 absolute top-12 right-5 md:right-4 z-20 flex justify-center items-center bg-secondary shadow-lg rounded-full p-2 md:p-4">
        <SiNodedotjs className="w-full h-full text-[#339933]" />
      </div>
      <div className="w-12 h-12 md:w-18 md:h-18 xl:w-20 xl:h-20 absolute bottom-0 right-0 md:right-4 z-20 flex justify-center items-center bg-secondary shadow-lg rounded-full p-2 md:p-4">
        <SiTailwindcss className="w-full h-full text-[#06B6D4]" />
      </div>
      <div className="w-10 h-10 xl:w-15 xl:h-15 absolute -top-10 right-10 md:-top-16 md:right-20 bg-secondary/80 rounded-full blur-xs"></div>
    </div>
  );
};

export default Hero;
