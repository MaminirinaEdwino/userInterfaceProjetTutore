import { CardContent, CardTitle } from "./ui/card"

export default function InputArraySimpleComponents({
    id, label, placeholder, name, value, onchange
}) {
    return <div className="flex flex-col">
        <label htmlFor={id} className="text-theme-3 p-1 font-bold">{label}</label>
        {value.map((item, index) => ( <ul key={item + index}>
            <li key={item + index}>
            <CardContent>
                <CardTitle className={"p-2 border w-fit m-1 rounded-lg "}>{item}</CardTitle>
            </CardContent>
            </li>
        </ul> ))}
        <input type="text" id={id} name={name} placeholder={placeholder} className="bg-theme-3/10 p-2 rounded-lg"/>
        <button type="button" onClick={() => {
            onchange([...value, document.getElementById(id).value])
            document.getElementById(id).value = ""
        }}>Ajouter</button>
    </div>
}