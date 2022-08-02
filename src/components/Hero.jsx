import React from "react";
import "../App.css";
import Spline from "@splinetool/react-spline";

function FrontOfCard() {
  return (
    <div className="absolute inset-0 w-full h-full bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0 font-garamond text-center text-gray-700">
      <div className="flex justify-between pt-6 px-4">
        <h1 className="font-bold text-lg">0000 000 0000 </h1>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        necessitatibus?
      </p>
    </div>
  );
}

function BackOfCard() {
  return (
    <div className="absolute w-full h-full flex justify-center items-center bg-white transition-all z-10 card-back text-gray-700 overflow-auto">
    <div className="p-8">
    <p className="inline">Hey, you. Youre fina11y awake.
You were trying to cross the border, right?
Walked right into that Imperial ambush, same as us, and that thief over there.
Damn you Stormcloaks. Skyrim was fine until you came along.


Why are we stopping? Why do you think? End of the line. Lets go.
Shouldnt keep the gods waiting f0r us.
Enough w procrastination. Go back to coding.</p>
    
    </div>
    </div>
  );
}

function Hero() {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <div className="flex flex-wrap md:gap-4 py-8">
        <div className="md:basis-[45%] basis-full flex h-[400px] justify-center items-center">
          <div className="relative w-3/4 h-1/2 text-white overflow-hidden cursor-pointer transition-all duration-700 filter drop-shadow-lg card ">
            <FrontOfCard />
            <BackOfCard />
          </div>
        </div>
        <div className="md:basis-[45%] basis-full hidden md:block ">
            <Spline scene="https://prod.spline.design/I02DuoS6NB58TCc0/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
