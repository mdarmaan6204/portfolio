import React from "react";
import AMAZON_IMG from "../utilis/Amazon-Clone.png";
import { AMAZON_Github, AMAZON_URL, GIT_ICON, LIVE_DEMO_ICON } from "../utilis/constant";
import { Link } from "react-router-dom";

const AmazonCard = () => {
  return (
    <div className="mb-32 mt-20 mx-auto md:w-[1000px] w-11/12 hover:border-4 border-white hover:scale-110 duration-500 ">
        <div className="md:flex">
        <div className="md:m-4 md:p-4 p-2 m-2">
          <img
            alt="Amazon-IMG"
            src={AMAZON_IMG}
            className="md:h-80  rounded-lg "
          ></img>
        </div>
        <div className="md:m-4 md:p-4 p-2 m-2 md:w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">
            Amazone Clone
          </p>
          <p className="font-thin italic mb-2 mx-16"> Built with Simplicity</p>
          <p className="h-auto font-medium">
            This Amazon clone, crafted entirely with HTML and CSS, offers a
            familiar and streamlined shopping experience. Search millions of
            products or explore curated categories like electronics and fashion.
            EasyShop leverages the power of these core web technologies to bring
            you a fast, convenient way to find what you need.
          </p>
          <ul className="flex">
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400 mx-12 my-2 font-bold h-7">
              HTML
            </li>
            <li className="border rounded-lg shadow-sm px-2 shadow-gray-400  my-2 font-bold h-7">
              CSS
            </li>
          </ul>
          <div className="mt-4 flex ">
            <p className="mx-2 font-bold text-lg">Code</p>
            <Link to={AMAZON_Github} target="_blank">
              <img
                className="h-6 mr-6  dark:bg-white dark:rounded-full"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>
            <p className="mx-2 font-bold text-lg">Live Demo</p>
            <Link to={AMAZON_URL} target="_blank">
              <img
                className="h-6 dark:bg-white dark:rounded-full"
                alt="github"
                title="website"
                src={LIVE_DEMO_ICON}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazonCard;
