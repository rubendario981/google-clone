import { CgMenuGridR } from "react-icons/cg";
import { FcOldTimeCamera } from "react-icons/fc";
import { FaUser } from "react-icons/fa"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { Tooltip, Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logoGoogle from "../assets/logo-google.png";
import mic from "../assets/mic.png";

function App() {
  return (
    <div>
      <div className="flex justify-end gap-5 mt-2 mr-6 py-4 items-center">
        <a className="hover:underline" href="https://mail.google.com/mail/?authuser=0&ogbl" target={"_blank"}>Gmail</a>
        <a className="hover:underline" href="https://www.google.com.co/imghp?hl=es&authuser=0&ogbl" target={"_blank"}>Imagenes</a>
        <Tooltip content="Google apps">
          <span className="hover:bg-gray-50 py-3 px-3 hover:rounded-full hover:cursor-pointer">
            <CgMenuGridR className="text-2xl" />
          </span>
        </Tooltip>
        <Tooltip content="Google account">
          <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/" }} target="_blank" className="bg-teal-600 py-3 rounded-full px-3 hover:cursor-pointer">
            <FaUser className="text-white text-lg" />
          </Link>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <img src={logoGoogle} alt="logo google company" className="w-48" />
      </div>
      <div className="flex justify-center">
        <div className="relative w-1/2">
          <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">            
             <HiMagnifyingGlass className="text-lg"/>
          </div>
          <input type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full" autoFocus />          
          <FcOldTimeCamera className="text-2xl absolute right-5 bottom-4"/> 
          <img src={mic} className="w-6 absolute right-14 bottom-4" alt="mic" /> 
        </div>
      </div>
        <div className="flex justify-center mt-9 gap-6">
          <button className="bg-gray-100 px-4 py-2 rounded-md hover:border hover:border-gray-300">Search with Google</button>
          <button className="bg-gray-100 px-4 py-2 rounded-md hover:border hover:border-gray-300">I'm feeling lucky</button>
        </div>
    </div>
  )
}

export default App