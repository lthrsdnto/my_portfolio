import React from "react";
import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function About({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-md mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white md:text-4xl text-2xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Services{"/>"}
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 text-gray-700 dark:text-white p-8 md:p-0 text-sm md:text-lg">
        <div className="flex flex-1 md:basis-2/4 basis-full bg-group bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px] rounded-full border-2 border-indigo-900 dark:border-none"></div>
        <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-bl-3xl">
          <div
            className="hover:cursor-none "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FadeInWhenVisible>
              <h1 className="text-lg font-bold">Front-End Development</h1>
              <p>
                Convert your mockups and ui prototypes into a functional and
                working website that creates an interaction and user experience.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        <div className="flex flex-wrap-reverse md:flex-auto">
          <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-r-3xl">
            <div
              className="hover:cursor-none "
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <FadeInWhenVisible>
                <h1 className="text-lg font-bold">Responsive Website</h1>
                <p>
                  Develop a responsive website layout that automatically adjusts
                  and adapts to any device screen size for a better user
                  experience.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>
          <div className="flex flex-1 md:basis-2/4 basis-full bg-designing bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px] rounded-full border-2 border-indigo-900 dark:border-none"></div>
        </div>

        <div className="flex flex-1 md:basis-2/4 basis-full bg-team bg-contain bg-no-repeat bg-center md:h-[300px] h-[200px] rounded-full border-2 border-indigo-900 dark:border-none"></div>
        <div className="flex flex-1 md:basis-1/4 basis-full flex-col gap-4 p-4 items-center justify-center rounded-tl-3xl">
          <div
            className="hover:cursor-none "
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <FadeInWhenVisible>
              <h1 className="text-lg font-bold">Team Collaboration</h1>
              <p>
                Can perform as part of a team's activities and has the necessary
                skills to help others to complete a task in the most effective
                and efficient way.
              </p>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
