import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl">
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
