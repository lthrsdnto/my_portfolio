import React from "react";
import splashy from "../assets/splashy.png";
import imxt from "../assets/imxt.png";
import tea from "../assets/tea.png";
import netlok from "../assets/netlok.png";
import { FaGithub } from "react-icons/fa";
import { BiRightArrow } from "react-icons/bi";
import { motion } from "framer-motion";

function Projects({ textEnter, textLeave }) {
  return (
    <div className="max-w-screen-lg mx-auto py-8 my-8 font-poppins">
      <div className="dark:text-white text-4xl font-bold text-black pb-4 text-center flex items-center justify-center">
        <motion.h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="hover:cursor-none"
        >
          {"<"}Projects{"/>"}
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center p-4 mx-auto">
              <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none w-full">
          <img
            src={splashy}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className="dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex text-white gap-2 items-center overflow-auto w-full py-2 scrollbar">
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TAILWINDCSS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                AXIOS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                UNSPLASH_API
              </span>
                <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                FS_LIGHTBOX
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">splashy</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto scrollbar">
              This project uses the Unsplash API to create an image search web
              app. Helped me understand how http requests, data retrieval, and
              showing them in the browser.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() =>
                  window.open("https://splashy-alpha.vercel.app/", "_blank")
                }
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                onClick={() =>
                  window.open("https://github.com/muhay007/splashy", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none w-full">
          <img
            src={imxt}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex text-white gap-2 items-center overflow-auto w-full py-2 scrollbar">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TAILWINDCSS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                AXIOS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TESSERACT_API
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">imxt</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto scrollbar">
              OCR online application that can image-to-text conversion. If there was no
              repository, I just screenshot, convert and copyMe. It is helpful sometimes.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() =>
                  window.open("https://imxt.vercel.app/", "_blank")
                }
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                onClick={() =>
                  window.open("https://github.com/muhay007/imxt", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none w-full">
          <img
            src={tea}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex text-white gap-2 items-center overflow-auto w-full py-2 scrollbar">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                PHP
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                MYSQL
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                BOOTSTRAP
              </span>
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                DATATABLES
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                SWEETALERT2
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                CHARTJS
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">tea101</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto scrollbar">
              <span class="dark:text-red-100 text-red-300">
                Development of Supply Chain with Stock Monitoring for TEA101
              </span>
              . This is my capstone project, am trying to improve it. Will be available soon..
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() => window.open("http://tea101.rf.gd/", "_blank")}
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="line-through w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                // onClick={() => window.open("", "_blank")}
              />
            </div>
          </div>
        </div>

  <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none w-full">
          <img
            src={brms}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex text-white gap-2 items-center overflow-auto w-full py-2 scrollbar">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                PHP
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                MYSQL
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                BOOTSTRAP
              </span>
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                DATATABLES
              </span>
        
            </div>
            <h3 className="text-center text-xl py-4 font-bold">tea101</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto scrollbar">
              <span class="dark:text-red-100 text-red-300">
                Book Record Management System
              </span>
              .Thesis group project for QCU library, learned alot in this project like the basic crud.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() => window.open("http://qculibrary.rf.gd/", "_blank")}
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="line-through w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                // onClick={() => window.open("", "_blank")}
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-indigo-900 border-2 dark:border-none w-full">
          <img
            src={netlok}
            alt=""
            className="object-fit w-full h-3/5 object-center py-4 px-6  duration-200 ease-linear"
          />
          <div className=" dark:text-white text-gray-700 w-4/5 mx-auto ">
            <div className="flex text-white gap-2 items-center overflow-auto w-full py-2 scrollbar">
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TAILWINDCSS
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                AXIOS
              </span>
              <span className="bg-[#0A1929]  hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                TMDB_API
              </span>
              <span className="bg-[#0A1929] hover:text-[#64FFDA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                REACT_PLAYER
              </span>
            </div>
            <h3 className="text-center text-xl py-4 font-bold">netlok</h3>
            <p className="text-left text-md whitespace-normal h-24 overflow-auto scrollbar">
              a movie web app that can view upcoming movies, popular etc., view
              details, watch trailer. i tried combining 2 most popular which is
              netflix and loklok theme. i used new version of
              react-router-dom-v6.
            </p>
            <br />
            <div className="flex justify-between py-4">
              <div
                onClick={() =>
                  window.open("https://netlok.vercel.app/", "_blank")
                }
                className="cursor-pointer inline-flex items-center py-2 px-4 text-md font-medium text-center bg-[#0A1929] text-white hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
              >
                LIVE
                <BiRightArrow className="ml-2" />
              </div>

              <FaGithub
                className="w-10 h-10 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
                onClick={() =>
                  window.open("https://github.com/muhay007/netlok", "_blank")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
