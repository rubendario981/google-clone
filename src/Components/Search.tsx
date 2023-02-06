import { Tooltip } from "@material-tailwind/react";
import { HiMagnifyingGlass } from "react-icons/hi2"
import mic from "../assets/mic.png";
import lens from "../assets/icon-lens.png";
import { ChangeEvent } from "react"

export const Search = ({searchParam, textValue} : string | any) => {
  const handleChanges = (e:  ChangeEvent<HTMLInputElement>) => {
    searchParam(e.target.value)
  }

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
        <HiMagnifyingGlass className="text-lg" />
      </div>
      <input name="search" value={textValue} type="search" className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full" onChange={handleChanges} autoFocus />
      <Tooltip content="Search image" placement="bottom">
        <img src={lens} className="w-9 absolute right-4 bottom-3 bg-transparent hover:cursor-pointer" alt="lens ico" />
      </Tooltip>
      <Tooltip content="Search by voice" placement="bottom">
        <img src={mic} className="w-6 absolute right-14 bottom-2 hover:cursor-pointer" alt="mic" />
      </Tooltip>
    </div>
  )
}
