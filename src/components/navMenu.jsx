import { useEffect, useState } from "react";
import {BiUser} from "react-icons/bi";
import {CgAdd} from "react-icons/cg";
import {FaHome} from "react-icons/fa";
import {FcDocument, FcNews} from "react-icons/fc";

export default function NavMenu({choice, setChoice}) {
    const  [left, setLeft] = useState("left-[0%]")

	const setHome = (e)=>{
        setLeft("left-[0%]")
        setChoice("home")
    }
    const setMe = (e)=>{
        setLeft("left-[75%]")
        setChoice("me")
    }
    const setPortfolio = (e)=>{
        setLeft("left-[50%]")
        setChoice("portfolio")
    }
    const setNew = (e)=>{
        setLeft("left-[25%]")
        setChoice("new")
    }
	return <nav className="fixed bottom-0 flex justify-around w-full text-3xl bg-theme-1  rounded-t-2xl overflow-hidden text-white">
		<a id="btnHome" className="p-3 w-full flex justify-center"
			onClick={
				setHome
		}><FaHome/></a>
		<a className="w-full flex justify-center  p-3"
			onClick={
				setNew
		}><CgAdd/></a>
		<a className="w-full flex justify-center  p-3" onClick={setPortfolio}><FcDocument/></a>
		<a  className="w-full flex justify-center  p-3 text-white" onClick={setMe}><BiUser/></a>
		<div className={
			"w-[25%] absolute bg-theme-3 -z-10 h-full transition-all duration-500 ease-initial " + left
		} ></div>
	</nav>
}
