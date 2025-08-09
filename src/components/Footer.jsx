import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { TbFileCv } from "react-icons/tb";

function Footer() {
  return (
    <>
      <div className="w-full h-28 md:h-36 p-4 md:p-8 flex justify-between items-center">
        <div className="">
          <h3 className="w-48 md:w-56 text-sm md:text-lg">
            Made with React Js, Tailwind, Shad CN & Framer Motion
          </h3>
        </div>

        <div className="flex justify-evenly items-center gap-5 md:gap-8 text-3xl">
          <motion.a 
            href="https://www.linkedin.com/in/gaurav-chauhan-18102a2b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="hover:scale-110"
          >
            <FaLinkedinIn />
          </motion.a>
          <a
            href="https://github.com/gauravchauhan25/"
            target="_blank"
            className="hover:scale-110"
          >
            <FaGithub />
          </a>
          
          <a
            href=""
            target="_blank"
            className="hover:scale-110"
          >
           <TbFileCv />
          </a>  
        
        </div>
      </div>
    </>
  );
}

export default Footer;
