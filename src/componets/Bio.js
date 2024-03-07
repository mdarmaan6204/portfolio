import React from "react";
import {
  CSS_ICON,
  GITHUB_PROFILE_URL,
  GIT_ICON,
  HTML_ICON,
  JS_ICON,
  LN_ICON,
  LN_PROFILE_URL,
  REACT_ICON,
  REDUX_ICON,
  TAILWIND_ICON,
} from "../utilis/constant";
import { Link } from "react-router-dom";
import Armaan_Pic from "../utilis/Armaan.png";

const Bio = () => {
  return (
    <div className="-mt-28 dark:text-white">
      <div className="w-2/3 m-auto my-28 p-4">
        <div className="flex justify-between m-4">
          <div className="w-4/12 my-6 ml-20">
            <p className="text-5xl font-extrabold my-6">
              Front-end Web Developer
            </p>
            <p className="font-serif my-2">
              Hi , I'm <span className="font-extrabold text-lg text-">Md Armaan</span>. A passionate Front-end Web Devopment based in
              Dhanbad , Jharkhand.
            </p>
            <div className="flex">
              <Link to={LN_PROFILE_URL} target="_blank">
                <img alt="ln" className="mr-2 h-5  dark:bg-white dark:rounded-sm" src={LN_ICON} />
              </Link>
              <Link to={GITHUB_PROFILE_URL} target="_blank">
                <img alt="git" className="h-5  dark:bg-white dark:rounded-full" src={GIT_ICON} />
              </Link>
            </div>
          </div>

          <div className="my-6">
            <img
              className="h-80 border rounded-full mr-40 shadow-2xl"
              src={Armaan_Pic}
              alt="profile"
            />
          </div>
        </div>
        <div className="mx-24 flex">
          <pre className="font-extrabold">Tech Stack |</pre>
          <ul className="flex justify">
            <li className="my-1 mx-4">
              <img alt="html" className="h-5  dark:bg-white dark:rounded-sm" src={HTML_ICON} title="HTML"
              ></img>
            </li>

            <li className="my-1 mx-4">
              <img alt="css" className="h-5" src={CSS_ICON} title="CSS"></img>
            </li>
            <li className="my-1 mx-8">
              <img alt="js" className="h-5" src={JS_ICON} title="Javascript"
              ></img>
            </li>

            <li className="my-1 mx-4">
              <img alt="react" className="h-5" src={REACT_ICON} title="React"
              ></img>
            </li>
            <li className="my-1 mx-4">
              <img alt="redux" className="h-5" src={REDUX_ICON} title="Redux Toolkit"
              ></img>
            </li>
            <li className="my-1 mx-4">
              <img alt="tw" className="h-5" src={TAILWIND_ICON} title="Tailwind CSS"
              ></img>
            </li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default Bio;
