import { useState } from "react";
import Footer from "./footer";
import InputComponents from "./inputComponents";
import LandingPageHeader from "./landingPageHeader";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigateur = useNavigate()
    const [errorState, setErrorState] = useState(false)
    window.localStorage.removeItem("token")
    const handleConnection = (e)=>{
        e.preventDefault()
        setErrorState(false)
        let data = new FormData(e.target)
        fetch(`http://${window.location.hostname}:1627/token`, {
            "method":"POST",
            body: data
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            if (res.access_token){
                window.localStorage.setItem("token", res.access_token)
                navigateur('/home')
            }else{
                setErrorState(true)
            }
        }).catch(err=>console.error(err))
    }
    return <section className="teste min-h-[100vh] text-theme-6 flex flex-col items-center justify-center">
    <LandingPageHeader option={"signin"}/>
    <div className="flex flex-col items-center p-5 rounded-sm backdrop-blur-sm  max-w-[95%]">
    <h2 className="text-2xl font-bold m-5">Log in</h2>
    <form onSubmit={handleConnection} className="flex flex-col">
        <InputComponents type={"text"} value={username} onchange={setUsername} placeholder={"Username"} label={"Username"} id={"username"} name={"username"}/>
        <InputComponents type={"password"} value={password} onchange={setPassword} placeholder={"Mot de passe"} label={"Mot de passe"} id={"password"} name={"password"}/>
        <button className="p-2 px-4 bg-theme-1 rounded-lg shadow-xl shadow-theme-1/15  mx-auto my-1 hover:bg-transparent border transition-all duration-100 text-theme-2 w-full">Se Connecter</button>
        {errorState && <div className="text-red-500 text-center ">* Veuillez re-saisir votre username ou votre mot de passe</div> }
    </form>

    </div>
    <Footer/>
    </section>
}