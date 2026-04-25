import Aboute from "../components/organisms/Aboute";
import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import HomeLayout from "../components/templates/HomeLayout";

function Home() {
  return (
    <HomeLayout
      navbar={<Navbar />}
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
      aboute={<Aboute></Aboute>}
    />
  );
}

export default Home;
