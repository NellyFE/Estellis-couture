import "./App.css";
import "./index.css";
import { Navbar } from "./Components/sections/Navbar";
import { Hero } from "./Components/sections/Hero";
import { About } from "./Components/sections/About";
import { Categories } from "./Components/sections/Categories";
import { Process } from "./Components/sections/Process";
import { Carousel } from "./Components/sections/Carousel";
import { Contact } from "./Components/sections/Contact";
import { Footer } from "./Components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Categories />

      <Process />

      <Carousel />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
