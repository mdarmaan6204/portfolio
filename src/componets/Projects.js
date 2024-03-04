import React from "react";
import NetflixGPTCard from "./NetflixGPTCard";
import YoutubeCard from "./YoutubeCard";

const Projects = () => {
  return (
    <div className="mx-52 my-20  grid w-[90%]">
      <NetflixGPTCard />
      <YoutubeCard />
    </div>
  );
};

export default Projects;
