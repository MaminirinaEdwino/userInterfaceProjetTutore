import { lazy, Suspense, useEffect, useState } from "react";
import LandingPageHeader from "./landingPageHeader";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import NavMenu from "./navMenu";
import NewPortfolio from "./newPortfolio";

export default function UserInterface() {
    const navigateur = useNavigate()
    const [choice, setChoice] = useState("home")
    const [user, setUser] = useState({})
    const user_me =async (e)=>{
        await fetch(`http://${window.location.hostname}:1627/users/me/`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            }
        }).then(res=>res.json()).then(res=>{
            window.localStorage.setItem("user", res)
            setUser(res)
            console.log(res)
        }).catch(err=>console.log(err))
    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigateur("/")
        } 
        user_me()
    }, [])
    return <section className="teste min-h-[100vh] bg-theme-1/20 flex flex-col items-center justify-center text-theme-6">
        <LandingPageHeader option={"logout"}/>
        {choice === "home" && GetHomeComponents(user)}

        {choice === "new" && <NewPortfolio user={user}/>}
        <NavMenu choice={choice} setChoice={setChoice}/>

    </section> 
}

function GetHomeComponents(user) {
    const HomeComponents = lazy(()=>import('./homeComponents'))
    return <Suspense fallback={<div>Loading . . .</div>}> 
        <HomeComponents user={user}/>
    </Suspense>

}