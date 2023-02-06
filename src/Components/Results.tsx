import { useState } from "react"
import logoGoogle from "../assets/logo-Google.png";
import OptionsHeader from "./OptionsHeader";
import { Search } from "./Search";
import { FiSettings } from "react-icons/fi"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { FaRegNewspaper } from "react-icons/fa"
import { AiOutlineYoutube } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5"
import { BsImage } from "react-icons/bs"
import { SlOptionsVertical } from "react-icons/sl"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AllResults from "./AllResults";

const Results = () => {
	const location = useLocation()
	const [openTab, setOpenTab] = useState("todo");
	const navigate = useNavigate();
	
	const options = [
		{ icon: <HiMagnifyingGlass />, text: "todo", content: <AllResults /> },
		{ icon: <AiOutlineYoutube />, text: "videos" },
		{ icon: <BsImage />, text: "images" },
		{ icon: <FaRegNewspaper />, text: "news" },
		{ icon: <IoLocationOutline />, text: "maps" },
		{ icon: <SlOptionsVertical />, text: "more" },
	]
	return (
		<div>
			<div onClick={()=> navigate("/")} className="flex items-center mt-4 hover:cursor-pointer">
				<img src={logoGoogle} alt="logo google company" className="w-36 pl-6" />

				<div className="flex ml-12 w-full">
					<Search textValue={location.search.split('=')[1]}/>
				</div>

				<div className="w-full flex justify-end mr-6">
					<FiSettings className="text-xl mt-3.5 mr-2" />
					<OptionsHeader />
				</div>
			</div>
			<div className="flex gap-10 ml-48">
				{options.map((opt, i) => (
					<NavLink to={""} key={i}
						onClick={() => setOpenTab(opt.text)}
						className={opt.text === openTab ? "flex gap-2 items-center border-b-4 border-b-blue-600 pb-2 text-blue-800" : "flex gap-2 items-center pb-2"}
					>
						{opt.icon}
						<span className="first-letter:capitalize">{opt.text}</span>
					</NavLink>
				))}
			</div>
			<div className="ml-48">
				{options.map((opt, i) => (
					<div key={i}
						className={opt.text === openTab ? "block" : "hidden"}
					>
						{opt.content}
					</div>
				))}
			</div>

		</div>
	)
}

export default Results