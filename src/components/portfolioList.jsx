import { useEffect, useState } from "react"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Delete, Eye, View } from "lucide-react"

export default function PortfolioList({user}) {
    const [allPortfolio, setAllPortfolio] = useState([])
    const getAllPortfolio = async (e)=>{
        await fetch(`http://${window.location.hostname}:1627/portfolio/user/${user.id}`, {
            method:'GET',
            headers: {
                'Authorization': "Bearer "+localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setAllPortfolio(res)
            console.log(res)
        })
        .catch(err=>console.error(err))
    }
    useEffect(()=>{
        getAllPortfolio()
    }, [])

   

    return <section className="w-full max-h-[80vh] overflow-scroll my-auto ">
        <CardTitle className={"text-center text-2xl m-2"}>Tous vos portfolios</CardTitle>
        {
            allPortfolio.map((portfolio, index) => <Card className={"w-full mb-2"}>
                <CardHeader>
                    <CardTitle>{portfolio.titre}</CardTitle>
                    <CardDescription>{portfolio.domaine}</CardDescription>
                    
                    <a className="border p-2 px-6 border-black rounded-lg w-fit" href={`http://${window.location.hostname}:5174/${portfolio.lien_portfolio}`} target="_blank"> Voir </a>
                </CardHeader>
            </Card> )
        }
    </section>
}