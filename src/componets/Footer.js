import React, { useContext } from "react";
import Dark from "../utilis/Dark";

const Footer = () => {
  const mode = useContext(Dark);
  const dark = mode.darkMode;

  return (
    <div className={`${dark && "dark"}`}>
      <div className="h-8  dark:bg-slate-900">
        <p className="font-mono md:ml-[700px] ml-[200px] dark:text-slate-300 text-slate-500">
          Designed by Md Armaan
        </p>
      </div>
    </div>
  );
};

export default Footer;
