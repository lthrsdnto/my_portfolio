import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";

import Form from "./Form";

function Contact() {
  return (
    <div className="max-w-screen-lg mx-auto rounded-t-2xl text-center text-xl font-poppins text-white pt-8 mt-8">
      <div className="flex flex-wrap gap-4 px-4 py-6 text-slate-900 dark:text-white">
        <div className="md:basis-[40%] basis-full flex flex-1 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 items-center justify-center flex-col border-2 border-indigo-900 dark:border-none">
          <div className="p-4">
            <h1 className="text-4xl font-bold">
              My <span className="text-sky-400">inbox</span> is always{" "}
              <span className="text-fuchsia-400">Open</span>.{" "}
            </h1>
            <p className="">Feel free to message me.</p>
            <div
              onClick={() =>
                window.open(
                  "",
                  "_blank"
                )
              }
              className="text-white mt-4 cursor-pointer inline-flex items-center py-2 px-4 text-sm font-medium text-center bg-[#0A1929] hover:text-[#64FFDA] rounded-2xl hover:scale-105 hover:rounded-none duration-200 ease-in-out"
            >
              Resume
            </div>
          </div>
        </div>
        <div className="md:basis-[40%] basis-full flex flex-1 bg-gray-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 items-center justify-center flex-col border-2 border-indigo-900 dark:border-none">
          <Form />
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 pb-4 text-slate-900 dark:text-white">
        <FaFacebook
          className="w-6 h-6 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
          onClick={() =>
            window.open("https://facebook.com/lthrsdnto", "_blank")
          }
        />
        <FaGithub
          className="w-6 h-6 cursor-pointer hover:text-[#64FFDA] duration-200 ease-in-out"
          onClick={() => window.open("https://github.com/muhay007", "_blank")}
        />{" "}
        | <p className="text-sm font-garamond">Made by 👽 Luther Sedanto</p>
      </div>
    </div>
  );
}

export default Contact;
