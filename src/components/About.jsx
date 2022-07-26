import React from "react";
import { motion } from "framer-motion";

function About({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-md mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white text-4xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Services{"/>"}
        </motion.h1>
      </div>
      <div className="flex flex-wrap gap-8 text-gray-700 dark:text-white p-8 md:p-0">
        <div className="flex flex-1 md:basis-2/4 basis-full bg-group bg-cover bg-center h-[400px] rounded-full border-2 border-indigo-900 "></div>
        <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-bl-3xl">
          <motion.div
            className="hover:cursor-none "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <h1 className="text-xl font-bold">Front-End Development</h1>
            <p className="text-md">
              Convert your mockups and ui prototypes into a functional and
              working website that creates an interaction and user experience.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap-reverse md:flex-auto">
          <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-r-3xl">
            <motion.div
              className="hover:cursor-none "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <h1 className="text-xl font-bold">Responsive Website</h1>
              <p className="text-md">
                Develop a responsive website layout that automatically adjusts
                and adapts to any device screen size for a better user
                experience.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-1 md:basis-2/4 basis-full bg-designing bg-cover bg-center h-[400px] rounded-full border-2 border-indigo-900 "></div>
        </div>

        <div className="flex flex-1 md:basis-2/4 basis-full bg-team bg-cover bg-center h-[400px] rounded-full border-2 border-indigo-900 "></div>
        <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-tl-3xl">
          <motion.div
            className="hover:cursor-none "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <h1 className="text-xl font-bold">Team Collaboration</h1>
            <p className="text-md">
              Can perform as part of a team's activities and has the necessary
              skills to help others to complete a task in the most effective and
              efficient way.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
