import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { DiGithub } from "react-icons/di";
import { motion } from "framer-motion";

const logos = [
  <FaReact
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="React"
  />,
  <SiTailwindcss
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="Tailwindcss"
  />,
  <DiGithub
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="Github"
  />,

  <DiNodejs
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="Nodejs"
  />,
  <DiPhp
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="PHP"
  />,
  <DiBootstrap
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="Bootstrap"
  />,
  <DiMongodb
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="Mongodb"
  />,
  <SiMysql
    className="w-16 h-16 text-white hover:text-[#64FFDA] duration-200 ease-linear"
    alt="MySQL"
  />,
];

function Services({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white text-4xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Technologies{"/>"}
        </motion.h1>
      </div>
      <div className=" bg-gradient-to-r from-indigo-900 to-slate-900 py-4 mt-4">
        <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 mx-8 place-items-center gap-4 ">
          {logos.map((logo, key) => {
            return (
              <motion.div
                className="logo"
                key={key}
                initial={{ opacity: 0, x: key % 2 === 0 ? -50 : 50, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: key * 0.5,
                }}
              >
                {logo}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
