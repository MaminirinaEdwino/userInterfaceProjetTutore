
import { NavLink } from "react-router-dom";
import LandingPageHeader from "./landingPageHeader";
import Footer from "./footer";
export default function LandingPage() {
    return <section className="min-h-[100vh] flex flex-col justify-center text-theme-6 teste">
    <LandingPageHeader option={"login"}/>
    <section className="flex flex-col items-center justify-center p-5 text-center gap-5 backdrop-blur-2xl w-[95%] mx-auto md:max-w-[50%] rounded-sm border-r border-b bg-theme-2">
        <div className="landingIntro p-2 text-lg">
        <p className="  transition-all ">Bievenue sur <span className="text-xl font-bold text-theme-1">MyPortFolio</span> <br />La platforme qui vous facilite la création de portfolio</p>
        <p className=" transition-all "><span className="text-xl font-bold text-theme-1">MyPortFolio</span> vous permet de créer un portfolio rapidement avec des designs modernes et directement disponible en ligne après la création</p>
        </div>
        <NavLink to={"/signin"} className={" bg-theme-1 text-theme-6 font-bold p-2 px-5 rounded-lg transition-all hover:text-white duration-75 text-theme-2"}>S'inscrire</NavLink>
    </section>
    <Footer/>
    </section>
}1