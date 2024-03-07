import React from "react";
import NetflixGPTCard from "./NetflixGPTCard";
import YoutubeCard from "./YoutubeCard";
import AmazonCard from "./AmazonCard";
import Portfolio from "./Portfolio";

const Projects = () => {
  return (
    <div className="dark -mt-10 h-lvh">
      <div className="dark:bg-slate-900 dark:text-white">
        <Portfolio />
        <NetflixGPTCard />
        <YoutubeCard />
        <AmazonCard />
      </div>
    </div>
  );
};

export default Projects;
