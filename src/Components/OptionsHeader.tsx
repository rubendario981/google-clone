import { CgMenuGridR } from "react-icons/cg";
import { FaUser } from "react-icons/fa"
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const OptionsHeader = () => {
  return (
    <div className="flex items-center gap-3">
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
  )
}

export default OptionsHeader