import React from "react";
import { Link } from "react-router-dom";

const Drink = ({ image, id, name, info, glass }) => {
  return (
    <article className="bg-slate-50 border w-80 rounded-xl border-slate-600 ">
      <div>
        <img src={image} alt={name} className="rounded-t-xl" />
      </div>
      <div className="text-center p-2 flex justify-around items-center">
        <div>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p className="font-light">{info}</p>
        </div>

        <Link to={`/drink/${id}`}>
          <p className="mx-auto m-1 p-2  border w-min rounded-lg bg-gray-500 hover:scale-110 hover:bg-orange-400 duration-300 text-white">
            Details
          </p>
        </Link>
      </div>
    </article>
  );
};

export default Drink;
