import React from "react";
import { heroImg } from "../utils";
import RSeries from "./RSeries";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          <img src={heroImg} alt="hero" className="pointer-events-none" />

          {/* <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video> */}


        </div>
      </div>
    </section>
  );
};

export default Hero;
