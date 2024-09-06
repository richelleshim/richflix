import React from "react";
import Card from "./Card";

const Categories = ({ title, items }) => {
  return (
    <div className="card-container flex w-full relative">
      <div className="flex-col  text-white font-semibold text-[20px]">
        {title}
        <div className="flex">
          {items.map((list, i) => (
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
  );
};

export default Categories;
