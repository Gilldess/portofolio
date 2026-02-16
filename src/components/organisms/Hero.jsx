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
    <div className="relative">
      <div className="absolute -bottom-6 left-5 w-100 rounded-full h-100 bg-primary"></div>
      <div className="overflow-hidden w-auto md:w-82.5 xl:w-110 h-auto">
        <Image src={Profile} alt="profile" className="relative z-10" />
      </div>
      <div className="w-45 h-45 absolute -bottom-10 z-20 -left-5 flex justify-center items-center bg-secondary rounded-full">
        <SiReact className="text-8xl text-[#61DAFB]" />
      </div>
      <div className="w-30 h-30 absolute top-6 z-20 right-5 flex justify-center items-center bg-secondary rounded-full">
        <SiNodedotjs className="text-7xl text-[#339933]" />
      </div>
      <div className="w-15 h-15 absolute -top-20 right-20 bg-secondary rounded-full"></div>
    </div>
  );
};

export default Hero;
