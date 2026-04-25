import { useState } from "react";
import Aboute from "../components/organisms/Aboute";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import HomeLayout from "../components/templates/HomeLayout";
import Project from "../components/organisms/Project";

const Home = () => {
    const [isDark, setIsDark] = useState(()=> {
    return localStorage.getItem("theme") === "dark";
  });
if (isDark) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
  return (
    <HomeLayout
      navbar={<Navbar isDark={isDark} setIsDark={setIsDark} />}
      hero={
        <Hero>
          <Hero.Header
          pargraph="Saya telah menyelesaikan program bootcamp Pengembang Web Full-Stack dari harisenin.com untuk memperdalam keterampilan sebagai Pengembang Web. Lihat proyek-proyek terbaru saya, yang menunjukkan keahlian saya dalam pengembangan web."
          >
            Mengubah Ide Menjadi {""}
          <span className="font-bold text-primary">Pengalaman Digital.</span>
          </Hero.Header>
          <Hero.Body />
        </Hero>
      }
      aboute={<Aboute />}
      project={<Project />}
    />
  );
}

export default Home;
