import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
