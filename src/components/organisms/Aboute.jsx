import Heading from "../atoms/Heading";
import Image from "../atoms/Image";
import Paragraph from "../atoms/Paragraph";
import Qodr from "../../assets/qodr_logo-only_color.svg"
import HariSenin from "../../assets/hari-senin.svg"
import { Link } from "react-router";


const skills = [
    {
        bidang: "Frontend",
        skill: ["HTML", "CSS", "Javascript", "React", "Tailwindcss", "Redux Toolkit"]
    },
    {
        bidang: "Backend",
        skill: ["Nodejs", "Expressjs,", "MongoDB", "MySQL"]
    },
    {
        bidang: "Tools",
        skill: ["Git, Github"]
    }
]
const Aboute = () => {
    return (
        <div>
            <Heading level={2} variantsize="sizesecondary" className="font-secondary text-secondary font-normal">Tentang saya</Heading>
            <div className="grid grid-rows gird-flow-dense gap-6 md:gap-16 mt-6 md:grid-cols-2 justify-between">
                <div className="flex flex-col order-2 md:order-1 gap-3">
                            {
                                skills.map((item) => (
                                 <div className="py-4 px-6 md:py-8 md:px-12 rounded-md bg-secondary" key={item.bidang}>
                                    <Heading level={3} variantsize="sizetertiary" className="font-secondary text-primary">{item.bidang}</Heading>
                                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                                        {
                                            item.skill.map((skill) => (
                                                <p key={skill} className="font-primary text-tertiary hover:text-tertiary/50 transition-colors duration-300 text-size-quaternary md:text-size-secondary">
                                                    {skill}
                                                </p>
                                            ))
                                        }
                                    </div>

                                 </div>
                                ))
                            }
                </div>
                <div className="order-1 md:order-2">
                    <Heading level={3} variantsize="sizetertiary" className="font-secondary text-primary">Pengalaman</Heading>
                    <Paragraph variantsize="sizesecondary" className="font-primary mt-2 tracking-[1.5px] text-secondary/80">
                        Pengembang Full-Stack Junior dengan dasar yang kuat dalam ekosistem JavaScript modern. Melalui program pelatihan intensif di bidang TI dan pengalaman magang, saya telah berhasil melakukan transisi karier yang mulus ke industri teknologi. Saya memiliki pengalaman langsung dalam lingkungan Agile Scrum, termasuk mengembangkan sistem logika perhitungan berbasis JavaScript yang kompleks.
                        Saya juga telah mengembangkan platform kursus daring full-stack menggunakan React, Tailwind CSS, dan Redux Toolkit, serta arsitektur API RESTful yang dibangun dengan Express dan MySQL. Saat ini, saya sedang mencari kesempatan kerja penuh waktu untuk membantu merancang produk yang berdampak bersama tim teknik yang dinamis.
                    </Paragraph>
                    <div className="mt-4">
                        <Heading level={3} variantsize="sizetertiary" className="font-secondary text-primary">Pendidikan</Heading>
                        <div className="mt-2 flex flex-col md:flex-row gap-4 md:gap-8 w-full">
                            <div className="w-40 md:w-60">
                                <Link to={"https://harisenin.com/"} target="_blank">
                                    <img src={HariSenin} alt="hari-senin_logo" className="md:grayscale md:hover:grayscale-0 active:grayscale-0 transition duration-500 ease-in-out"/>
                                </Link>
                            </div>
                            <div className="w-20 md:w-25">
                                <Link to={"https://www.qodr.id/"} target="_blank">
                                    <Image src={Qodr} alt="Qodr_logo" className="md:grayscale md:hover:grayscale-0 transition duration-500 ease-in-out"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboute;