import { motion, scale } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutImg from "../images/about.png";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <motion.h3
        className="text-white text-center text-3xl md:text-5xl font-bold md:mb-10"
        id="about"
        data-aos="fade-up"
      >
        Know who <span className="text-[#c770f0]">I am!</span>
      </motion.h3>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2" >
        <motion.div
          className="col-span-1 md:py-[60px] text-sm md:text-2xl p-8"
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            data-aos="fade-right"
          >
            I am an 22-years-old{" "}
            <span className="text-[#c770f0] font-bold">
              Fullstack Developer
            </span>{" "}
            based in India, currently pursuing Bachelor of Computer Applications
            at{" "}
            <span className="text-[#c770f0] font-bold">
              Maharaja Surajmal Institute
            </span>
            .<br /> With a strong passion for technology and problem-solving, I
            enjoy creating innovative solutions and exploring the endless
            possibilities of software development.
          </motion.div>
        </motion.div>

        <motion.div
          className="col-span-1 inline p-8 md:p-0"
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          data-aos="fade-left"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={aboutImg}
          ></motion.img>
        </motion.div>
      </div>
    </>
  );
}
