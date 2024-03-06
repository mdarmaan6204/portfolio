import React from "react";
import Bio from "./Bio";
import Projects from "./Projects";
import Intro from "./Intro";
import Work from "./Work";
import Portfolio from "./Portfolio";
const Body = () => {
  return (
    <div>
      <Bio />
      <Intro />
      <Portfolio/>
      <Projects />
      <Work/>
    </div>
  );
};

export default Body;
