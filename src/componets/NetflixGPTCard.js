import React from 'react'
import { Link } from 'react-router-dom'
import { GIT_ICON, LIVE_DEMO_ICON, NetflixGPT_Github, NetflixGPT_URL } from '../utilis/constant'
import NetflixGPT_IMG from "../utilis/NetflixGPT.png"

const NetflixGPTCard = () => {
  return (
    <div className="mb-32 mt-20 mx-auto w-[1000px]">
        <div className="flex">
        <div className="m-4 p-4">
          <img
            alt="NetflixGPT"
            src={NetflixGPT_IMG}
            className="relative h-80 rounded-lg"
          ></img>
        </div>
        <div className="m-4 p-4 w-1/2">
          <p className="font-extrabold text-3xl font-serif mx-16">NetflixGPT</p>
          <p className="font-thin italic mb-2 mx-16"> Find your next binge!</p>
          <p className="h-auto font-medium">
            Unleash the power of personalization with NetflixGPT! Say goodbye to
            endless scrolling and hello to movie magic. Our AI uses Bard to
            recommend top picks just for you, or search by mood to find the
            perfect film for any feeling. It's your personalized Netflix
            experience
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
            <Link to={NetflixGPT_Github} target="_blank">
              <img
                className="h-6 mr-6"
                alt="github"
                title="repo"
                src={GIT_ICON}
              />
            </Link>
            <p className="mx-2 font-bold text-lg">Live Demo</p>
            <Link to={NetflixGPT_URL} target="_blank">
              <img
                className="h-6"
                alt="github"
                title="website"
                src={LIVE_DEMO_ICON}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NetflixGPTCard