import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
