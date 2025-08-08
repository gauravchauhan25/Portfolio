import { motion } from "framer-motion";
import homeMain from "../images/home-main.svg";

function Home() {
  return (
    <div
      className="max-w-[1300px] items-center mx-auto md:grid grid-cols-2 md:mt-0 mt-32 md:h-screen"
      id="home"
    >
      <motion.div
        className="col-span-1 mx-auto md:py-[60px] text-sm md:text-lg p-8 text-center md:text-start"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="font-bold text-3xl mb-3 md:text-5xl"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
        >
          Hi there,
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
          <br></br>
        </motion.div>

        <motion.div
          className="font-bold text-2xl mb-5 md:text-5xl"
          initial={{ y: -700 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 120 }}
        >
          I'm <span className="text-[#c770f0]">Gaurav Singh Chauhan</span>
          <br></br>
        </motion.div>
      </motion.div>

      <motion.div
        className="col-span-1 w-[70%] inline md:ml-5 p-8 md:p-0"
        initial={{ y: -700 }}
        animate={{ y: 0 }}
        // transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.img
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200 }}
          src={homeMain}
        ></motion.img>
      </motion.div>
    </div>
  );
}

export default Home;
