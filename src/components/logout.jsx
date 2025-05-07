import { useNavigate } from "react-router-dom"

export default function LogOut() {
    const navigateur = useNavigate()
    window.localStorage.removeItem("token")

    navigateur("/login")
    
    return <></>
    
}