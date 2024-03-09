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
import Armaan_Pic from "../utilis/Armaan.jpg"

const Bio = () => {
  return (
    <div className="-mt-28 dark:text-white">
      <div className="md:w-2/3 my-28 md:p-2 p-1">
        <div className="flex justify-between md:m-4">
          <div className="md:w-4/12 w-10/12 my-6 md:ml-20 ml-8">
            <p className="text-3xl md:text-5xl font-extrabold my-6">
              Front-end Web Developer
            </p>
            <p className="font-serif my-2">
              Hi , I'm <span className="font-extrabold text-lg">Md Armaan</span>. A passionate Front-end Web Devopment based in
              Dhanbad , Jharkhand.
            </p>
            <div className="flex">
              <Link to={LN_PROFILE_URL} target="_blank">
                <img alt="ln"
                title ="Profile"
                 className="mr-2 h-5  dark:bg-white dark:rounded-sm hover:scale-125" src={LN_ICON} />
              </Link>
              <Link to={GITHUB_PROFILE_URL} target="_blank">
                <img alt="git"
                title="Github" className="h-5 dark:bg-white dark:rounded-full hover:scale-125" src={GIT_ICON} />
              </Link>
            </div>
          </div>
          <div className="my-6">
            <img
              className="border max-h-80 rounded-full md:mr-40 mr-20 mt-8 md:-mt-8 shadow-2xl "
              src={Armaan_Pic}
              alt="profile"
            />
          </div>
        </div>
        <div className="md:mx-24 mx-6 flex">
          <pre className="font-extrabold">Tech Stack |</pre>
          <ul className="flex justify">
            <li className="my-1 md:mx-4 mx-2">
              <img alt="html" className="h-5  dark:bg-white dark:rounded-sm" src={HTML_ICON} title="HTML"
              ></img>
            </li>

            <li className="my-1 md:mx-4 mx-2">
              <img alt="css" className="h-5" src={CSS_ICON} title="CSS"></img>
            </li>
            <li className="my-1 md:mx-4 mx-2">
              <img alt="js" className="h-5" src={JS_ICON} title="Javascript"
              ></img>
            </li>

            <li className="my-1 md:mx-4 mx-2">
              <img alt="react" className="h-5" src={REACT_ICON} title="React"
              ></img>
            </li>
            <li className="my-1 md:mx-4 mx-2">
              <img alt="redux" className="h-5" src={REDUX_ICON} title="Redux Toolkit"
              ></img>
            </li>
            <li className="my-1 md:mx-4 mx-2">
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
