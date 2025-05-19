export default function InputComponents({type, label, value, onchange, placeholder, id, name}) {
    
    return <div className="flex flex-col m-1">
        {value != "" && <label htmlFor={id} className="relative left-2 text-sm w-fit font-bold text-theme-3/50">{label}</label>}
        <input type={type} value={value} onChange={(e)=>onchange(e.target.value)} placeholder={placeholder} id={id} name={name} required className="h-10 p-1 px-3  rounded-lg outline-0 bg-theme-3/10 text-theme-3/85"/>
    </div>
}