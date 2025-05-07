export default function TextAreaComponents({value, onchange, id, label, placeholder, name}) {
    return <div>
        {value != "" && <label htmlFor={id} className="text-theme-6 text-sm font-bold outline-none">{label}</label>}
        <textarea className="border w-full rounded p-2" name={name} value={value} onChange={(e)=>onchange(e.target.value)} placeholder={placeholder} id={id}></textarea>
    </div>
}