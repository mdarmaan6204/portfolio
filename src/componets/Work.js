import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <div className=" flex ml-40 mb-10">
        <p className=" font-bold text-3xl w-2/12 my-2 mx-20">
          Interested in work together?
        </p>
        <Link to="/contact">
          <button className="ml-[450px] text-xl font-bold rounded-2xl h-10 p-2 mx-2 my-4 bg-gradient-to-l from-purple-500 to-indigo-500">
            Send me a message
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
