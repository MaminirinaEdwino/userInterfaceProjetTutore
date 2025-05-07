import { BiLogIn, BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom"
import bg from "../assets/logo.png"
export default function LandingPageHeader({option}) {
	return <header className="flex justify-between p-2 px-4 items-center absolute top-0 w-full border-b-2 backdrop-blur-2xl bg-theme-1/20">
		<h1 className="text-xl font-bold flex  items-center">
			<img src={bg}
				alt=""
				className="w-10"/>
			MyPortfolio
		</h1>
		{option ==="login" && <nav>
			<NavLink to={"/login"}
				className={"flex items-center border p-2 px-4 rounded-sm hover:bg-theme-6 hover:text-theme-1 transition-all duration-100 font-bold"}>
				Login
				<BiLogIn/></NavLink>
		</nav>}
        {option ==="signin" && <nav>
			<NavLink to={"/signin"}
				className={"flex items-center border p-2 px-4 rounded-sm hover:bg-theme-6 hover:text-theme-1 transition-all duration-100 font-bold"}>
				Sign In
				<BiLogIn/></NavLink>
		</nav>}
        {option ==="logout" && <nav>
			<NavLink to={"/login"}
				className={"flex items-center border p-2 px-4 rounded-sm hover:bg-theme-6 hover:text-theme-1 transition-all duration-100 font-bold"}>
				Logout
				<BiLogOut/></NavLink>
		</nav>}
	</header>
}
