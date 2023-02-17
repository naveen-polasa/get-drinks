import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="text-center m-20">
      <h2
        className="text-3xl m-12
      "
      >
        Oops! Nothing is here
      </h2>
      <Link to="/">
        <button className="p-2 border rounded-lg bg-gray-600 text-white hover:scale-110 hover:bg-orange-400 duration-300">
          Back To Home
        </button>
      </Link>
    </section>
  );
};

export default Error;
