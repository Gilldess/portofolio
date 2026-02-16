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
          pargraph="i am fullstack developer and i am very passionate in web development"
          btn="My Works"
          >
            Hello My Name is.{" "}
          <span className="font-bold text-primary">Agil Desta Hernanda</span>
          </Hero.Header>
          <Hero.Body />
        </Hero>
      }
    />
  );
}

export default Home;
