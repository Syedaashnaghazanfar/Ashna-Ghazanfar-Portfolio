import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Services from "@/app/components/services";
import Projects from "@/app/components/projects";
import Statistics from "@/app/components/statistics";
import Contact from "@/app/components/contact";
import Footer from "@/app/components/footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
