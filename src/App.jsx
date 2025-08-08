import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import TechStacks from "./components/TechStacks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import loader from "./images/loader.svg";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-center h-screen">
        <img src={loader} alt="loader" />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-[linear-gradient(270deg,#1b1429,#140f23)] mx-auto">
      <Navbar />
      <Home />
      <About />
      <TechStacks />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
