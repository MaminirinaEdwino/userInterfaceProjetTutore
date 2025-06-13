import { useEffect, useState } from "react"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Delete, Eye, Trash2, View } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectLabel } from "./ui/select"
import { SelectGroup, SelectValue } from "@radix-ui/react-select"
import { Button } from "./ui/button"
import Loader from "./loader"
import { Toaster } from "./ui/sonner"
import { toast } from "sonner"

export default function PortfolioList({user}) {
    const [allPortfolio, setAllPortfolio] = useState([])
    const [template, setTemplate] = useState(0)
    const [loading, setLoading] = useState(false)
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
        {loading && <div className="fixed  mx-auto w-full h-[100vh] bg-theme-3/20 backdrop-blur-2xl flex justify-center items-center z-20 top-0" >
            <Loader/>
        </div>}
        
        <CardTitle className={"text-center text-2xl m-2 p-2"}>Tous vos portfolios</CardTitle>
        {
            allPortfolio.map((portfolio, index) => <Card className={"w-full box-border mb-2"}>
                <CardHeader>
                    <CardTitle>{portfolio.titre}</CardTitle>
                    <CardDescription>{portfolio.domaine}</CardDescription>
                    
                    <a className="border p-2 px-6 border-black rounded-lg w-fit" href={`http://${window.location.hostname}:5174/${portfolio.lien_portfolio}`} target="_blank"> Voir</a>
                    <CardAction>
                        <Button onClick={async (e)=>{
                            await fetch(`http://${window.location.hostname}:1627/portfolio/${portfolio.id}`, {
                                method: "DELETE",
                                headers: {
                                    "Authorization" : "Bearer "+window.localStorage.getItem("token")
                                }
                            }).then(res=>res.json())
                            .then(res=>{
                                console.log(res)
                                toast("Portfolio supprimée avec succèe")
                                getAllPortfolio()
                            })
                            .catch(err=>console.error(err))
                        }}> <Trash2></Trash2> </Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    
                   <form action="" onSubmit={(e)=>{
                    e.preventDefault()
                    let data = new FormData(e.target)
                        setLoading(true)
                        fetch(`http://${window.location.hostname}:1627/portfolio/${portfolio.id}`, {
                            method:'PUT',
                            headers: {
                                'Authorization': "Bearer "+localStorage.getItem("token"),
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                template: data.get("template")
                            })
                        }).then(res=>res.json())
                        .then(res=>{
                            console.log(res)
                           
                            setLoading(false)
                            getAllPortfolio()
                        }
                        )
                        .catch(err=>console.error(err))
                    }}>
                   <Select name="template" >
                        <SelectTrigger>
                            <SelectValue placeholder="Changer de template"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel >Changer template</SelectLabel>
                                <SelectItem value="0" onClick={(e)=>setTemplate(0)}>Template 1</SelectItem>
                                <SelectItem value="1" onClick={(e)=>setTemplate(1)}>Template 2</SelectItem>
                                <SelectItem value="2" onClick={(e)=>setTemplate(2)}>Template 3</SelectItem>
                                <SelectItem value="3" onClick={(e)=>setTemplate(3)}>Template 4</SelectItem>
                                <SelectItem value="4" onClick={(e)=>setTemplate(4)}>Template 5</SelectItem>
                                <SelectItem value="5" onClick={(e)=>setTemplate(5)}>Template 6</SelectItem>
                                <SelectItem value="6" onClick={(e)=>setTemplate(6)}>Template 7</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button className={"m-1"} >Save</Button> 
                   </form>
                    
                </CardContent>
            </Card> )
        }
        <Toaster></Toaster>
    </section>
}