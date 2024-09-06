import React from "react";
import { heroImg } from "../utils";
import RSeries from "../components/RSeries";
import Card from "../components/Card";
import Hero from "../components/Hero";
import { favoriteList } from "../constants";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <section className="w-full bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <Hero />
        <Categories title="My Favorites" items={favoriteList} />
        <Categories title="My Favorites" items={favoriteList} />

      </div>
    </section>
  );
};

export default Home;
