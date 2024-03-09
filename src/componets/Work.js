import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dark from "../utilis/Dark";

const Work = () => {
  const mode = useContext(Dark);
  const dark = (mode.darkMode);

  return (
    <div className={`${dark && "dark"}`}>
      <div className="flex p-10 dark:bg-slate-900">
        <p className="mb-4 ml-40 dark:text-white font-bold text-3xl w-2/12 my-2 mx-20">
          Interested in work together?
        </p>

        <button className="hover:scale-110 w-2/12 mb-10 ml-[450px] text-xl font-bold rounded-2xl h-10 p-2 mx-2 my-4 bg-gradient-to-l from-purple-500 to-indigo-500">
          <Link to="/contact"> Send me a message</Link>
        </button>
      </div>
    </div>
  );
};

export default Work;
