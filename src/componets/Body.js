import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Intro from "./Intro";
import Work from "./Work";

const Body = () => {
  return (
    <div className="dark">
      <div className="dark:bg-slate-900 dark:text-white">
      <Bio />
      <Intro />
      <Projects />
      <Work/>
      </div>
    </div>
  );
};

export default Body;
