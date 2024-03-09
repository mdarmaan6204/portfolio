import React from "react";

const Error = () => {
  return (
    <div className="dark">
      <div className=" dark:bg-slate-800 dark:text-white"></div>
      <div className="mx-[550px] my-40">
        <p className="text-2xl font-extrabold m-2">
          Oops! Something went wrong!!!
        </p>
        <p className="text-xl font-serif m-2">Please try again...</p>
      </div>
    </div>
  );
};

export default Error;
