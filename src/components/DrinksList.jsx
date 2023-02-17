import React from "react";
import Drink from "./Drink";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const DrinksList = () => {
  const { drinks, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (drinks.length < 1) {
    return (
      <h3 className="text-center text-3xl m-12">
        Sorry No Drinks Matched Your Search
      </h3>
    );
  }

  return (
    <section className="m-4">
      <h2 className="text-2xl text-center m-5 font-bold">Drinks</h2>
      <div className="mx-12 justify-center flex flex-wrap gap-y-6 md:gap-y-12 md:gap-x-12 ">
        {drinks.map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default DrinksList;
