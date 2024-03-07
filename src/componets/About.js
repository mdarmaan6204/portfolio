import React from "react";
import Intro from "./Intro";
import Experince from "./Experince";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const About = () => {
  return (
   <div className="dark -mt-20">
    <div className="dark:bg-slate-800 dark:text-white">
    <Intro/>
    {/* <Experince/> */}
    <Education />
    <Work/>
    {/* <Skills/> */}
    </div>
   </div>
  );
};

export default About;
