import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  return (
    <section className="text-center pt-8">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="border rounded-lg border-black w-[85%] lg:w-[60%] h-12 px-5"
          placeholder="Search..."
          ref={searchValue}
          onChange={() => setSearchValue(searchValue.current.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
