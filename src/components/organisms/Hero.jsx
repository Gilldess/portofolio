import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Pargraph from "../atoms/Pargraph";
import Profile from "../../assets/img_pp.png";
import Button from "../atoms/Button";
import { SiNodedotjs, SiReact } from "react-icons/si";

const Hero = ({ children }) => {
  return (
    <div className="flex flex-col gap-8 justify-between xl:justify-center xl:gap-12 md:flex-row items-center">
      {children}
    </div>
  );
};

Hero.Header = ({ children, pargraph, btn }) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading level={1} variantsize="sizeprimary" className="font-secondary">
        {children}
      </Heading>
      <Pargraph>{pargraph}</Pargraph>
      <Button
        className="w-fit bg-primary mt-2 text-tertiary"
        variantsize={"sizeprimary"}
      >
        {btn}
      </Button>
    </div>
  );
};
Hero.Body = () => {
  return (
    <div className="relative mx-auto xl:mx-0 mt-10 md:mt-0">
      <div className="absolute -bottom-6 left-5 w-[90%] h-[90%] rounded-full bg-primary/90 z-0"></div>

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
      <div className="w-10 h-10 xl:w-15 xl:h-15 absolute -top-10 right-10 md:-top-16 md:right-20 bg-secondary/50 rounded-full blur-xs"></div>
    </div>
  );
};

export default Hero;
