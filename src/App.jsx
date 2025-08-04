import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <main className="pt-20 max-w-4xl mx-auto px-4">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
