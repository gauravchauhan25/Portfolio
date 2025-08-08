import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { motion } from "framer-motion";
import Aos from"aos"
import "aos/dist/aos.css"
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { useEffect } from "react";

function Techstack() {
  useEffect(() => {
    Aos.init({
      duration: 1500,    });
  }, [])
  
  return (
    <>
      <div className="my-16">
        <motion.h3
          className="text-white text-3xl md:text-5xl font-bold items-center text-center my-10"
          data-aos="fade-up"
        >
          Professional <span className="text-[#c770f0]">Skillset</span>
        </motion.h3>

        <Row className="justify-center items-center grid grid-cols-3 md:grid-cols-4 mx-1 md:mx-45">
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <CgCPlusPlus />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <DiJavascript1 />
          </Col>

          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <DiReact />
          </Col>

          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <SiNextdotjs />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <DiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons" data-aos="flip-up">
            <SiFirebase />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Techstack;
