import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { projects } from "../assets/projects.js";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="my-16 text-white" id="projects">
        <h3
          className="text-3xl md:text-5xl font-semibold text-center"
          data-aos="fade-up"
        >
          Projects
        </h3>

        <div className="max-w-[1300px]  mx-auto gap-10 p-6 md:my-14 md:p-0 ">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 md:gap-10">
            {projects.map((data) => (
              // <img src="" alt="project" />
              <motion.div
                className="h-auto duration-500 rounded-lg p-5 mb-5 shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] hover:shadow-[0_4px_4px_5px_rgba(129,72,144,0.561)]"
                key={data.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1 }}
                data-aos="flip-up"
              >
                <h3 className="text-[#c770f0] text-lg mb-5 md:text-3xl font-bold text-center">
                  {data.name}
                </h3>
                <p className="text-[17px]">{data.description}</p>
                <p className="mt-5 text-[18px]">
                  Tech Used: <span className="text-[#c770f0]">{data.tech}</span>
                </p>

                <div className="flex items-center justify-center text-center gap-5 mt-2">
                  <Button
                    onClick={() => window.open(data.githubUrl, "_blank")}
                    className="bg-[#623686] hover:bg-[#6d20c5d7] border-[#623686] text-lg px-5 py-1 my-3 rounded-sm hover:cursor-pointer flex items-center justify-center gap-1"
                  >
                    <FaGithub />
                    Github
                  </Button>

                  <Button
                    onClick={() => window.open(data.demoUrl, "_blank")}
                    className="bg-[#623686] hover:bg-[#6d20c5d7] border-[#623686] text-lg px-5 py-1 my-3 rounded-sm hover:cursor-pointer flex items-center justify-center gap-1"
                  >
                    <CgWebsite />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
