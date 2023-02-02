import { CgMenuGridR } from "react-icons/cg";
import { FaUser } from "react-icons/fa"
import { Tooltip, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const goToGoogle = () => navigate
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
          <Link to={{ pathname: "https://accounts.google.com/SignOutOptions?hl=es&continue=https://www.google.com/"}} target="_blank" className="bg-teal-600 py-3 rounded-full px-3 hover:cursor-pointer">
            <FaUser className="text-white text-lg" />
          </Link>
        </Tooltip>
      </div>
    </div>
  )
}

export default App