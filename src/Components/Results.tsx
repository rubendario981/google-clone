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
import { NavLink } from "react-router-dom";
import AllResults from "./AllResults";

const Results = () => {
	const [openTab, setOpenTab] = useState("todos");
	const options = [
		{ icon: <HiMagnifyingGlass />, text: "todos", content: <AllResults /> },
		{ icon: <AiOutlineYoutube />, text: "videos" },
		{ icon: <BsImage />, text: "imagenes" },
		{ icon: <FaRegNewspaper />, text: "noticias" },
		{ icon: <IoLocationOutline />, text: "maps" },
		{ icon: <SlOptionsVertical />, text: "más" },
	]
	return (
		<div>
			<div className="flex items-center mt-4">
				<img src={logoGoogle} alt="logo google company" className="w-36 pl-6" />

				<div className="flex ml-12 w-full">
					<Search />
				</div>

				<div className="w-full flex justify-end mr-6">
					<FiSettings className="text-xl mt-3.5 mr-2" />
					<OptionsHeader />
				</div>
			</div>
			<div className="flex gap-10 ml-48">
				{options.map(o => (
					<NavLink to={""}
						onClick={() => setOpenTab(o.text)}
						className={o.text === openTab ? "flex gap-2 items-center border-b-4 border-b-blue-600 pb-2 text-blue-800" : "flex gap-2 items-center pb-2"}
					>
						{o.icon}
						<span className="first-letter:capitalize">{o.text}</span>
					</NavLink>
				))}
			</div>
			<div>
				{options.map((o, i) => (
					<div key={i}
						className={o.text === openTab ? "block" : "hidden"}
					>
						{o.content}
					</div>
				))}
			</div>

		</div>
	)
}

export default Results