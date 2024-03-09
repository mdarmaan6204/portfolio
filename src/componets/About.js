import React, { useContext } from "react";
import Intro from "./Intro";
import Experince from "./Experince";
import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import Dark from "../utilis/Dark";

const About = () => {
  const mode = useContext(Dark);
  const dark = (mode.darkMode);

  return (
    <div className={`${dark && "dark"} -mt-20`}>
    <div className="dark:bg-slate-900 dark:text-white">
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
