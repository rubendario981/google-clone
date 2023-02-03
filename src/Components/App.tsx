import logoGoogle from "../assets/logo-google.png";
import { Search } from "./Search";
import OptionsHeader from "./OptionsHeader";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const checkResults = () => navigate("/result")
  return (
    <div className="flex flex-col">
      <div className="flex justify-end gap-5 mt-2 mr-6 py-4 items-center">
        <a className="hover:underline" href="https://mail.google.com/mail/?authuser=0&ogbl" target={"_blank"}>Gmail</a>
        <a className="hover:underline" href="https://www.google.com.co/imghp?hl=es&authuser=0&ogbl" target={"_blank"}>Imagenes</a>
        <OptionsHeader />
      </div>
      <div className="flex justify-center">
        <img src={logoGoogle} alt="logo google company" className="w-48" />
      </div>

      <div className="flex justify-center w-1/2 mx-auto">
        <Search />
      </div>

      <div className="flex justify-center mt-9 gap-6">
        <button onClick={checkResults} className="bg-gray-100 px-4 py-2 rounded-md hover:border hover:border-gray-300">Search with Google</button>
        <button className="bg-gray-100 px-4 py-2 rounded-md hover:border hover:border-gray-300">I'm feeling lucky</button>
      </div>
    </div>
  )
}

export default App