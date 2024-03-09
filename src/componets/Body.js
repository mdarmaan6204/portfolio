import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Intro from "./Intro";
import Work from "./Work";
import { useContext } from "react";
import Dark from "../utilis/Dark";
const Body = () => {
  const mode = useContext(Dark);
  const dark = (mode.darkMode);
  console.log(dark);

  return (
    <div className={`${dark && "dark"}`}>
      <div className="dark:bg-slate-900 dark:text-white">
        <Bio />
        <Intro />
        <Projects />
        <Work />
      </div>
    </div>
  );
};

export default Body;
