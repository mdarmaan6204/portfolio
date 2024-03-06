import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between px-2 py-4 my-2 shadow-xl font-bold h-16 rounded-lg">
        <Link to ="/" className="ml-2 hover:scale-110 ">Armaan.dev</Link>
        <ul className="flex mx-4">
          <Link to="/">
            <li className="mx-4 hover:bg-black hover:text-white hover:scale-110 w-16 h-8 rounded-xl px-2">Home</li>
          </Link>
          <Link to="/projects">
            <li className="mx-4   hover:bg-black hover:text-white hover:scale-110 w-20 h-8 rounded-xl px-2">Projects</li>
          </Link>
          <Link to="/about">
            <li className="mx-4  hover:bg-black hover:text-white hover:scale-110  w-16 h-8 rounded-xl px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="mx-4  hover:bg-black hover:text-white hover:scale-110 w-20 h-8 rounded-xl px-2">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
