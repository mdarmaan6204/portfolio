import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dark from "../utilis/Dark";

const Work = () => {
  const mode = useContext(Dark);
  const dark = (mode.darkMode);

  return (
    <div className={`${dark && "dark"}`}>
      <div className="flex md:p-10 p-2 dark:bg-slate-900">
        <p className="md:ml-40 ml-10 dark:text-white font-bold md:text-3xl text-xl md:w-2/12 w-10/12 my-2 md:mr-20">
          Interested in work together?
        </p>
        <button className="hover:scale-110 duration-300 md:w-2/12 mb-10 md:ml-[450px]  md:text-xl text-lg font-bold rounded-2xl md:h-10 md:p-2 mx-2 my-4 bg-gradient-to-l from-purple-500 to-indigo-500">
          <Link to="/contact"> Send me a message</Link>
        </button>
      </div>
    </div>
  );
};

export default Work;
