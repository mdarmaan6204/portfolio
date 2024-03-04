import React from "react";
import {
  GIT_ICON,
  LIVE_DEMO_ICON,
  YT_Github,
  YT_URL,
} from "../utilis/constant";
import { Link } from "react-router-dom";
import YT_IMG from "../utilis/Youtube.png";

const YoutubeCard = () => {
  return (
    <div>
      <div className="mb-32 flex w-3/4 h-[100]  ">
        <div className=" m-4 p-4 w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">
            Youtube Clone
          </p>
          <p className="h-auto">
            <p>Level Up Your YouTube Experience!</p>
            <p>
              This platform offers the familiar YouTube interface with some
              exciting upgrades:
            </p>
            <ul>
              <li>
                Enhanced Search: Type and get instant suggestions, making it
                easier to find the perfect video.
              </li>
              <li>
                Community Focus: Dive deeper with features inspired by the
                original, fostering a more connected viewing experience.
              </li>
            </ul>
            <p>
              Explore, discover, and connect - all within your favorite video
              platform, reimagined!
            </p>
          </p>
          <ul className="flex">
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400 mx-12 my-2 font-bold h-7">
              React
            </li>
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400  my-2 font-bold h-7">
              Tailwind
            </li>
          </ul>
          <div className="mt-4 flex ">
            <p className="mx-2 font-bold text-lg">Code</p>
            <Link to={YT_Github} target="_blank">
              <img
                className="h-6 mr-6"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>

            <p className="mx-2 font-bold text-lg">Live Demo</p>
            <Link to={YT_URL} target="_blank">
              {" "}
              <img
                className="h-6"
                alt="github"
                title="website"
                src={LIVE_DEMO_ICON}
              />
            </Link>
          </div>
        </div>
        <div className="m-4 p-4 w-11/12 ">
          <img
            alt="NetflixGPT"
            src={YT_IMG}
            className="relative h-80 rounded-lg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;