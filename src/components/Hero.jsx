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
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white transition-all z-10 card-back text-gray-700">
    <div className="p-4 overflow-auto">
    <p className="inline text-sm">Hey, you. You're finally awake.
You were trying to cross the border, right?
Walked right into that Imperial ambush, same as us, and that thief over there.
Damn you Stormcloaks. Skyrim was fine until you came along.
Empire was nice and lazy. If they hadn't been looking for you,
I could've stolen that horse and be halfway to Hammerfell. You there.
You and me - we shouldn't be here. It's these Stormcloaks the Empire wants.
We're all brothers and sisters in binds now, thief. Shut up back there!
And what's wrong with him, huh? Watch your tongue.
You're speaking to Ulfric Stormcloak, the true High King. Ulfric?
The Jarl of Windhelm? You're the leader of the rebellion.
But if they've captured you... Oh gods, where are they taking us?
I don't know where we're going, but Sovngarde awaits.
No, this can't be happening. This isn't happening.
Hey, what village are you from, horse thief? Why do you care?
A Nord's last thoughts should be of home. Rorikstead. I'm...
I'm from Rorikstead.

...looks like the Thalmor are with him.

General Tullius, sir. The headsman is waiting. Good. Let's get this over with!
Shor, Mara, Dibella, Kynareth, Akatosh. Divines, please help me. Look at him.
General Tullius the Military Governor.
And it looks like the Thalmor are with him.
Damn elves. I bet they had something to do with this.

Why are we stopping? Why do you think? End of the line. Let's go.
Shouldn't keep the gods waiting for us.
Enough with procrastination. Go back to coding.</p>
    
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
