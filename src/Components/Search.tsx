import { Tooltip } from "@material-tailwind/react";
import { FcOldTimeCamera } from "react-icons/fc";
import { HiMagnifyingGlass } from "react-icons/hi2"
import mic from "../assets/mic.png";

export const Search = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
        <HiMagnifyingGlass className="text-lg" />
      </div>
      <input type="search" className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full" autoFocus />
      <Tooltip content="Search image" placement="bottom">
        <FcOldTimeCamera className="text-2xl absolute right-5 bottom-2 hover:cursor-pointer" />
      </Tooltip>
      <Tooltip content="Search by voice" placement="bottom">
        <img src={mic} className="w-6 absolute right-14 bottom-2 hover:cursor-pointer" alt="mic" />
      </Tooltip>
    </div>
  )
}
