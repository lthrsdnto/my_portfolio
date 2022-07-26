import React from "react";
import "../App.css";
import bateman from "../assets/bateman.gif";

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0 font-garamond text-center text-gray-700">
      <div className="flex justify-between pt-6 px-4">
        <h1 className="font-bold text-lg">0951 755 1940</h1>
        <div className="flex flex-wrap flex-col">
          <h1 className="text-lg font-bold">DAY {"&"} NIGHT</h1>
          <p className="text-xs font-medium">{"< />"} ALL THE WAY</p>
        </div>
      </div>
      <div className="text-center my-12 font-bold">
        <h1 className="text-xl">LUTHER SEDANTO</h1>
        <h2 className="text-lg">WEB DEVELOPER</h2>
      </div>
      <p className="text-xs font-medium p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, autem.
      </p>
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
      <img src={bateman} alt="" />
    </div>
  );
}

function Hero() {
  return (
    <div className=" max-w-screen-lg mx-auto p-4">
      <div className="flex flex-wrap md:gap-4 py-8">
        <div className="md:basis-[45%] basis-full flex flex-1 h-[400px] justify-center items-center">
          <div className="relative w-3/4 h-1/2 text-white overflow-hidden cursor-pointer transition-all duration-700 filter drop-shadow-lg card ">
            <FrontOfCard />
            <BackOfCard />
          </div>
        </div>
        <div className="md:basis-[45%] basis-full flex flex-1 h-[400px] bg-bighead bg-cover bg-center filter rounded-full duration-200 ease-linear"></div>
      </div>
    </div>
  );
}

export default Hero;
