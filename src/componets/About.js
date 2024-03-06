import React from "react";
import Intro from "./Intro";
import Experince from "./Experince";
import Education from "./Education";
import Work from "./Work";

const About = () => {
  return (
   <div>
    <Intro/>
    {/* <Experince/> */}
    <Education />
    <Work/>
   </div>
  );
};

export default About;
