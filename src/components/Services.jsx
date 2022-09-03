import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { DiNodejs, DiGithub, DiPhp } from "react-icons/di";
import { motion } from "framer-motion";

const logos = [
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      REACT
    </span>
    <FaReact
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="React"
    />{" "}
  </>,
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      TAILWINDCSS
    </span>
    <SiTailwindcss
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="Tailwindcss"
    />
  </>,
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      GITHUB
    </span>
    <DiGithub
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="Github"
    />
  </>,
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      NODEJS
    </span>
    <DiNodejs
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="Nodejs"
    />
  </>,
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      PHP
    </span>
    <DiPhp
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="PHP"
    />
  </>,
  <>
    <span className="bg-slate-300 hidden group-hover:block text-center rounded-md font-bold px-2 absolute hover:cursor-none">
      MYSQL
    </span>
    <SiMysql
      className="w-7 h-7 md:w-12 md:h-12 text-white hover:text-[#64FFDA] duration-200 ease-linear"
      alt="MySQL"
    />
  </>,
];

function Services({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white md:text-4xl text-2xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Technologies{"/>"}
        </motion.h1>
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 py-4 mt-4">
        <div className="grid grid-cols-3 md:grid-cols-3 md:grid-rows-2 mx-8 place-items-center gap-4 ">
          {logos.map((logo, key) => {
            return (
              <motion.div
                className="logo group relative flex items-center justify-center"
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
