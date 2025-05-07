export default function InputArraySimpleComponents({
    id, label, placeholder, name, value, onchange
}) {
    return <div>
        <label htmlFor={id}>{label}</label>
        {value.map((item, index) => ( <ul key={item + index}>
            <li key={item + index}>
                {item}
            </li>
        </ul> ))}
        <input type="text" id={id} name={name} placeholder={placeholder} />
        <button type="button" onClick={() => {
            onchange([...value, document.getElementById(id).value])
            document.getElementById(id).value = ""
        }}>Ajouter</button>
    </div>
}