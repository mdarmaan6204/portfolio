import React from "react";
import NetflixGPTCard from "./NetflixGPTCard";
import YoutubeCard from "./YoutubeCard";
import AmazonCard from "./AmazonCard";
import Portfolio from "./Portfolio";

const Projects = () => {
  return (
    <div className="dark -mt-2">
      <div className="dark:bg-slate-900 dark:text-white p-2 py-8">
        <Portfolio />
        <NetflixGPTCard />
        <YoutubeCard />
        <AmazonCard />
      </div>
    </div>
  );
};

export default Projects;
