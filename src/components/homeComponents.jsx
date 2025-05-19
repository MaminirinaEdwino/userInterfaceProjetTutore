import { useEffect, useState } from "react"

export default function HomeComponents({user}) {
    const [latestPortfolio, setLatestPortfolio] = useState(null)
    const [apercu, setApercu] = useState("hidden")
    const fetchLastPortfolio = async (e)=>{
        await fetch(`http://${window.location.hostname}:1627/portfolio/user/last/${user["id"]}`,{
            headers: {
                "Authorization": "Bearer "+window.localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>setLatestPortfolio(res))
        .catch(err=>console.error(err))
    }

    const handleApercu = (e) => {
        e.preventDefault()
        if (apercu === "hidden") {
            setApercu("")
        } else {
            setApercu("hidden")
        }
    }
    
    useEffect(() => {
        fetchLastPortfolio()
    }, [])
    
    return <>
    <section id="home" className="w-full flex justify-center ">
        <div className="w-[90%] p-2 border rounded text-theme-3">
        <h2 className="text-3xl  text-center font-bold ">Your Last Portfolio </h2>
        {latestPortfolio != null && <div className="lastPortfolio">
            <p className="text-center font-bold text-lg ">{latestPortfolio.titre}</p>
            <p className="font-bold">Nombre de visite : {latestPortfolio.nombre_visite}</p>
            <p className="p-2">
            <span className="font-bold">Lien </span><a href={`http://${window.location.hostname}:5174/${latestPortfolio.lien_portfolio}`} className="">{`${window.location.protocol}//${window.location.host}/${latestPortfolio.lien_portfolio}`}</a>
            </p>
            <button className={`p-2 border px-4  rounded-lg m-2 `} onClick={handleApercu}>Aperçu</button>
            {apercu === "" && <button className={`p-2 border px-4  rounded-lg m-2 fixed top-0 left-0 z-30`} onClick={handleApercu}>Aperçu</button>}
            <div id="apercu">
                
            <iframe src={`http://${window.location.hostname}:5174/${latestPortfolio.lien_portfolio}`} frameborder="0" className={`h-full w-full fixed left-0 top-0 z-20 `+apercu}></iframe>
            </div>

            </div>}
           
        </div>
    </section>
    </>
}