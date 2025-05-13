import "./App.css";
import "./index.css";
import { Navbar } from "./Components/sections/Navbar";
import { Hero } from "./Components/sections/Hero";
import { About } from "./Components/sections/About";
import { Categories } from "./Components/sections/Categories";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Categories />
    </>
  );
}

export default App;
