import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between p-2  my-2 shadow-lg font-bold">
        <Link to ="/" className="ml-2">Armaan.dev</Link>
        <ul className="flex mx-4">
          <Link to="/">
            <li className="mx-4">Home</li>
          </Link>
          <Link to="/projects">
            <li className="mx-4">Projects</li>
          </Link>
          <Link to="/about">
            <li className="mx-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="mx-4">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
