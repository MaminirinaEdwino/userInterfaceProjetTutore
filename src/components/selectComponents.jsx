export default function SelectComponents({ id, label, name, onchange, value, options }) {

    return <div className="flex flex-col gap-2">
        {value != 0 && <label htmlFor={id} className="text-theme-6 text-sm font-bold">{label}</label>}
        <select id={id} name={name} className="bg-theme-3/10 p-2 outline-none  rounded-lg mb-1" onChange={(e) => onchange(e.target.value)} value={value}>
            {options.map((option, index) => (
                <option key={index} value={index} className="w-fit text-black">{option}</option>
            ))}
        </select>
    </div>
    
}