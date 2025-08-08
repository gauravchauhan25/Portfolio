import { useState } from "react";
import { motion } from "framer-motion";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


function Navbar() {
  const [navColor, setNavColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={`${navColor ? "sticky" : "navbar"}
 text-white flex justify-between md:justify-around p-4 z-10 fixed top-0 w-full`}
    >
      <motion.h3
        className="font-semibold text-2xl md:text-4xl"
        animate={{ x: 1 }}
        initial={{ x: -400 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
      >
        Portfolio
      </motion.h3>

      <motion.nav
        className="md:flex font-semibold gap-6 md:gap-16 md:text-2xl hidden"
        animate={{ x: 1 }}
        initial={{ x: 800 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
      >
        <ul className="flex items-center gap-8 md:gap-16">
          <li>
            <motion.button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-1 hover:scale-125 transition duration-200 ease-in cursor-pointer"
            >
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </motion.button>
          </li>
          <li>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="hover:scale-125 transition duration-200 ease-in cursor-pointer"
            >
              About Me
            </motion.button>
          </li>
          <li>
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="hover:scale-125 transition duration-200 ease-in cursor-pointer"
            >
              Projects
            </motion.button>
          </li>
          <li>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="hover:scale-125 transition duration-200 ease-in cursor-pointer"
            >
              Contact
            </motion.button>
          </li>
        </ul>
      </motion.nav>

      <div className="block md:hidden">
        {/* Drop down menu */}
      </div>
    </motion.div>
  );
}

export default Navbar;
