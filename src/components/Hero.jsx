import React from "react";
import "../App.css";
import giphy from "../assets/giphy.gif";
import Spline from "@splinetool/react-spline";

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0 font-garamond text-center text-gray-700">
      <div className="flex justify-between pt-6 px-4">
        <h1 className="font-bold md:text-base text-sm">0951 755 1940</h1>
        <div className="flex flex-wrap flex-col">
          <h1 className="md:text-lg text-base font-bold">DAY {"&"} NIGHT</h1>
          <p className="md:text-base text-xs font-medium">
            {"< />"} ALL THE WAY
          </p>
        </div>
      </div>
      <div className="text-center md:my-12 my-8 font-bold">
        <h1 className="md:text-xl text-lg">LUTHER SEDANTO</h1>
        <h2 className="md:text-lg text-base">WEB DEVELOPER</h2>
      </div>
      <p className="md:text-sm text-xs font-medium md:mb-2 mb-1 absolute bottom-0 w-full text-center">
        If you're not a good shot today, don't worry. There are other ways to be
        useful.
      </p>
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-white transition-all z-10 card-back text-gray-700 overflow-auto text-center text-sm font-bold italic">
      <img src={giphy} className="w-full h-full" alt="wew" />
    </div>
  );
}

function Hero() {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className="flex flex-wrap md:gap-4 py-8">
        <div className="md:basis-[45%] basis-full flex h-[400px] justify-center items-center mx-auto">
          <div className="relative w-3/4 h-1/2 text-white overflow-hidden cursor-pointer transition-all duration-700 filter drop-shadow-lg card ">
            <FrontOfCard />
            <BackOfCard />
          </div>
        </div>
        <div className="md:basis-[45%] basis-full hidden md:block mx-auto">
          <Spline scene="https://prod.spline.design/I02DuoS6NB58TCc0/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
