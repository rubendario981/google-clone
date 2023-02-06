import { CgMenuGridR } from "react-icons/cg";
import { FaUser } from "react-icons/fa"
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import iconGmail from "../assets/icons8-gmail-logo-48.png";
import iconGoogle from "../assets/icons8-google-48.png";
import iconGoogleCalendar from "../assets/icons8-google-calendar-48.png";
import iconGoogleDrive from "../assets/icons8-google-drive-48.png";
import iconGoogleMaps from "../assets/icons8-google-maps-48.png";
import iconGoogleNews from "../assets/icons8-google-news-48.png";
import iconGooglePlay from "../assets/icons8-google-play-48.png";
import iconYoutube from "../assets/icons8-youtube-48.png";

const OptionsHeader = () => {
  const [modalOpts, setModalOpts] = useState<boolean>(false)
  return (
    <div className="flex items-center gap-3">
      <Tooltip content="Google apps">
        <span onClick={() => setModalOpts(prevState => !prevState)} className="hover:bg-gray-50 py-3 px-3 hover:rounded-full hover:cursor-pointer">
          <CgMenuGridR className="text-2xl" />
        </span>
      </Tooltip>
      <Tooltip content="Google account">
        <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank" className="bg-teal-600 py-3 rounded-full px-3 hover:cursor-pointer">
          <FaUser className="text-white text-lg" />
        </Link>
      </Tooltip>
      {modalOpts &&
        <div className={modalOpts ? "fixed top-20 right-4 bg-white shadow-xl border border-gray-300 rounded-md w-1/4 z-10" : "hidden"}>
          <div className="flex flex-wrap gap-6 justify-center py-4">
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <FaUser className="bg-teal-600 py-3 rounded-full text-white text-5xl pb-3" />
              <p>Account</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGoogle} alt="google icon" />
              <p>Google</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGoogleMaps} alt="google maps icon" />
              <p>Maps</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconYoutube} alt="youtube icon" />
              <p>Youtube</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGooglePlay} alt="google play store icon" />
              <p>Play store</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGoogleNews} alt="google news icon" />
              <p>News</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGmail} alt="google icon" />
              <p>GMail</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGoogleCalendar} alt="google icon" />
              <p>Calendar</p>
            </Link>
            <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank"
              className="flex flex-col p-3 justify-center items-center rounded-md hover:bg-light-blue-50">
              <img src={iconGoogleDrive} alt="google icon"/>
              
              <p>Drive</p>
            </Link>
          </div>
          <div className="flex justify-center gap-3 pb-3">
            <p>Icons provided by </p>
            <Link to={{ pathname: "https://icons8.com/icon/37246/gmail-logo" }} target="_blank" className="underline text-blue-600"> Icons8</Link>
          </div>
        </div>}
    </div>
  )
}

export default OptionsHeader