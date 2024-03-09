import React from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = ({ mode, toggleMode }) => {
  const dark = mode;

  return (
    <div className={`${dark && "dark"} bg-slate-200 delay-150`}>
      <div className="w-lvw border-slate-500 dark:border-b-2 dark:bg-slate-800 dark:text-white flex justify-between px-2 py-4 mb-2 shadow-xl font-bold h-16">
        <Link to="/" className="md:ml-2 hidden md:block lg:block hover:scale-110 text-sm  md:text-base">
          Armaan.dev
        </Link>
        <ul className="flex">
          <Link to="/">
            <li className="md:mx-4 ml-8 text-sm  md:text-base hover:bg-black hover:text-white hover:scale-110 md:w-16 w-14 h-6 md:h-8 rounded-xl px-2">
              Home
            </li>
          </Link>
          <Link to="/projects">
            <li className="md:mx-4 mx-2 text-sm  md:text-base  hover:bg-black hover:text-white hover:scale-110 md:w-20 w-16 h-6 md:h-8 rounded-xl px-2">
              Projects
            </li>
          </Link>
          <Link to="/about">
            <li className="md:mx-4 mx-2 text-sm  md:text-base  hover:bg-black hover:text-white hover:scale-110  md:w-16 w-14 h-6 md:h-8 rounded-xl px-2">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="md:mx-4 mx-2 text-sm  md:text-base  hover:bg-black hover:text-white hover:scale-110 md:w-20 w-16 h-6 md:h-8 rounded-xl px-2">
              Contact
            </li>
          </Link>
          <li className="md:mx-4 mx-2 px-2" onClick={toggleMode}>
            {mode ? <LightModeIcon /> : <DarkModeIcon />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
