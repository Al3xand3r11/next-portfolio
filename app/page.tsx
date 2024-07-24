import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import NavBar from "@/components/NavBar";
import Experience from "@/components/Experience";
import Design from "@/components/Design";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
        <div className="bg-tan">
          <NavBar/>
          <Hero/>
          <Tech/>
          <Experience/>
          <Projects/>
          <Design/>
          <Contact/>
          <Footer/>
        </div>
    </main>
  );
}
