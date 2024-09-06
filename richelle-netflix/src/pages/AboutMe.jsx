import React from "react";
import RSeries from "../components/RSeries";
import { heroImg } from "../utils";
import Categories from "../components/Categories";
import { favoriteList } from "../constants";

const AboutMe = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full  flex-center flex-col">
        <div className="md:w-full w-full">
          <RSeries
            seriesTitle="Richelle Haein Shim"
            subtitle="Born in 2003, Richelle Shim is on a
            journey to find out more about herself and the
             world. Along the way, she meets new people, finds 
            new experiences, and even though she falls 
            down sometimes, she always gets back up!"
            // onPlay=""
            backgroundImage={heroImg}
          />
          <div className=" w-full pt-1 ">
            <div className="mt-2 flex-col">
              <Categories title="Season 1: Who am I?" items={favoriteList} />
              <Categories title="Season 2: Finding my why" items={favoriteList} />
              <Categories title="Season 3: Who I want to be" items={favoriteList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
