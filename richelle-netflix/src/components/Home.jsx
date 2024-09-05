import React from "react";
import { heroImg } from "../utils";
import RSeries from "./RSeries";
import Card from "./Card";
import Hero from "./Hero";
import { favoriteList } from "../constants";

const Home = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <Hero />

        <div className="card-container flex w-full relative">
          <div className="flex-col  text-white font-semibold text-[20px]">
            {"My Favorites"}
            <div className="flex">
              {favoriteList.map((list, i) => (
                <div key={list.id} className="p-2 flex">
                  <Card
                    title={list.title}
                    rating={list.rating}
                    season={list.season}
                    year={list.year}
                    caption={list.caption}
                    image={list.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
