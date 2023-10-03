import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="py-10 flex  w-full h-screen ">
        <div className="basis-1/2 flex items-center justify-center">
       
        </div>
        <div className="basis-1/2 w-full h-full flex justify-center font-pacifico">
         
          <div className="flex flex-col justify-center">
          <h1 className="text-orange-200 text-6xl text-center mx-6 px-2">Devran Restaurant</h1>
          <p className="text-2xl mx-4 text-center">
           We create sweet memories
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
