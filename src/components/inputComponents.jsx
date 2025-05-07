export default function InputComponents({type, label, value, onchange, placeholder, id, name}) {
    
    return <div className="flex flex-col m-1">
        {value != "" && <label htmlFor={id} className="relative left-2 text-sm w-fit">{label}</label>}
        <input type={type} value={value} onChange={(e)=>onchange(e.target.value)} placeholder={placeholder} id={id} name={name} required className="h-10 border p-1 px-3  rounded-sm outline-0"/>
    </div>
}