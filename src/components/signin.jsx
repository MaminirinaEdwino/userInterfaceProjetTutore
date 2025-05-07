import { useState } from "react";
import Footer from "./footer";
import InputComponents from "./inputComponents";
import LandingPageHeader from "./landingPageHeader";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [lastname, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [age, SetAge] = useState(0)
    const [facebook, setFacebook] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [password, setPassword] = useState("")
    const [step, setStep] = useState(1)
    const navigateur = useNavigate()
    const handleConnection =async  (e)=>{
        e.preventDefault()
        const data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "email": email,
            "password": password,
            "adress": address,
            "phone": phone,
            "age": age,
            "facebook": facebook,
            "linkedin": linkedIn
        }
        await fetch(`http://${window.location.hostname}:1627/users/`, {
            "method":"POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(data)
        }).then(res=>res.json()).then(res=>{
            console.log(res)
            if (res.detail){
                console.error("Erreur lors de l'inscription")
            }else{
                navigateur("/login")
            }
        }).catch(err=>console.error(err))
    }
    return <section className="teste min-h-[100vh] text-theme-6 flex flex-col items-center justify-center">
        <LandingPageHeader option={"login"}/>
        
        <form action="" onSubmit={handleConnection} className="flex flex-col items-center p-5 rounded-sm backdrop-blur-sm bg-theme-1/50 max-w-[95%]">
        <h2 className="text-2xl font-bold text-center">Sign In  </h2>
        <h2 className="text-sm">Etape {step}/2</h2>
            {step == 1 && <div className="step1 flex flex-col ">
                
                <InputComponents type={"text"} name={"firstname"} label={"Prénom"} placeholder={"Prénom"} id={"prenom"} onchange={setFirstname} value={firstname} />
                <InputComponents type={"text"} name={"lastname"} label={"Nom"} placeholder={"Nom"} id={"lastname"} onchange={setLastName} value={lastname} />
                <InputComponents type={"text"} name={"username"} label={"Nom d'utilisateur"} placeholder={"Nom d'utilisateur"} id={"username"} onchange={setUsername} value={username} />
                <InputComponents type={"email"} name={"email"} label={"Email"} placeholder={"Email"} id={"email"} onchange={setEmail} value={email} />
                <InputComponents type={"password"} name={"password"} label={"Mot de passe"} placeholder={"Mot de passe"} id={"password"} onchange={setPassword} value={password} />
                <span onClick={(e)=>setStep(2)} className="bg-theme-1 p-2 px-5 m-2 w-fit rounded border hover:bg-transparent transition-all duration-100">Suivant</span>
            </div>}
            {step == 2 && <div className="step2">
                <InputComponents type={"text"} name={"address"} label={"Adresse"} placeholder={"Adresse"} id={"address"} onchange={setAddress} value={address} />
                <InputComponents type={"number"} name={"phone"} label={"Téléphone"} placeholder={"Téléphone"} id={"phone"} onchange={setPhone} value={phone} />
                <InputComponents type={"number"} name={"age"} label={"Age"} placeholder={"Age"} id={"age"} onchange={SetAge} value={age} />
                <InputComponents type={"text"} name={"facebook"} label={"Facebook"} placeholder={"Facebook"} id={"facebook"} onchange={setFacebook} value={facebook} />
                <InputComponents type={"text"} name={"linkedin"} label={"LinkedIn"} placeholder={"LinkedIn"} id={"linkedin"} onchange={setLinkedIn} value={linkedIn} />
                <span onClick={(e)=>setStep(1)} className="bg-theme-1 p-2 px-5 m-2 w-fit rounded border hover:bg-transparent transition-all duration-100">Précedent</span><button className="bg-theme-1 p-2 px-5 m-2 w-fit rounded border hover:bg-transparent transition-all duration-100">S'inscrire</button>
            </div>}

        </form>
        <Footer/>
    </section>
}