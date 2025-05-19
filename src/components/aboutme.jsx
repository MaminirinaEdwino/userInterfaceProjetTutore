import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FaLinkedin } from "react-icons/fa";

export default function AboutMe({user}) {
    console.log(user)
    return <section className="w-full p-2">
        <Card className={'w-full '}>
        <CardHeader>
            <CardTitle>
                About Me
            </CardTitle>
            <CardDescription>
                Username: {user.username}
            </CardDescription>
        </CardHeader>
        <CardContent>
            <CardHeader>
                <CardTitle>{user.first_name} {user.last_name} </CardTitle>
                <CardTitle className={"flex gap-2 flex-1/2 flex-wrap"}><Mail/> {user.email} </CardTitle>
                <CardTitle className={"flex gap-2 flex-1/2 flex-wrap"}><Phone/> {user.phone} </CardTitle>
                <CardTitle className={"flex gap-2 flex-1/2 flex-wrap"}><FaLinkedin/> {user.linkedin} </CardTitle>

            </CardHeader>
            
        </CardContent>
    </Card>
    </section>
}