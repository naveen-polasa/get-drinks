import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-18 flex justify-between font-bold text-slate-800 bg-slate-200">
      <Link to="/" className="px-12 py-4 hover:scale-110 duration-300">
        <h2>DrinksDB</h2>
      </Link>
      <div className="nav-links px-5 lg:px-12 py-4 flex gap-x-12 ">
        <Link to="/" className="hover:scale-110 duration-300">
          Home
        </Link>
        <Link to="about" className="hover:scale-110 duration-300">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
