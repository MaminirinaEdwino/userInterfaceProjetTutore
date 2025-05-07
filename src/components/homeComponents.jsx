import { useEffect, useState } from "react"

export default function HomeComponents({user}) {
    const [latestPortfolio, setLatestPortfolio] = useState(null)
    const fetchLastPortfolio = async (e)=>{
        await fetch(`http://${window.location.hostname}:1627/portfolio/user/last/${user["id"]}`,{
            headers: {
                "Authorization": "Bearer "+window.localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>setLatestPortfolio(res))
        .catch(err=>console.error(err))
    }


    
    useEffect(() => {
        fetchLastPortfolio()
    }, [])
    
    return <>
    <section id="home" className="w-full flex justify-center ">
        <div className="w-[90%] p-2 bg-theme-1/50 backdrop-blur-2xl">
        <h2 className="text-3xl  text-center font-bold">Your Last Portfolio </h2>
        {latestPortfolio != null && <div className="lastPortfolio">
            <p>Titre: {latestPortfolio.titre}</p>
            <p>Lien: {latestPortfolio.lien_portfolio}</p>
            <p>Nombre de visite : {latestPortfolio.nombre_visite}</p>
            <a href={`http://${window.location.hostname}:5174/${latestPortfolio.lien_portfolio}`} >voir</a>
            <iframe src={`http://${window.location.hostname}:5174/${latestPortfolio.lien_portfolio}`} frameborder="0" className="h-96"></iframe>
            </div>}
           
        </div>
    </section>
    </>
}