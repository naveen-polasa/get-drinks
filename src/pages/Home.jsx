import React from "react";
import DrinksList from "../components/DrinksList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <main>
      <SearchForm />
      <DrinksList />
    </main>
  );
};

export default Home;
