import {useState} from "react"

export default function InputArrayComponents({
	id,
	label,
	name,
	onchange,
	value,
	placeholder,
	tag,
	attributs
}) {
	

	const handleAddItem = (e) => {
		e.preventDefault()
		// const newItem = {
		//     titre: document.getElementById("input"+tag+"TitreNew").value,
		//     etablissement: document.getElementById("input"+tag+"EtablissementNew").value,
		//     annee: document.getElementById("input"+tag+"AnneeNew").value
		// }
		let newItem = {}
		attributs.forEach((attribut, index) => {
			newItem[attribut] = document.getElementById("input" + tag + attribut + index).value
		})
		let vide = false
		attributs.forEach(element => {
			if (newItem[element] === "") {
				vide = true
			}
		});
		if (! vide) {
			onchange([
				...value,
				newItem
			])
			attributs.forEach((attribut, index) => {
				document.getElementById("input" + tag + attribut + index).value = ""
			})
		}
	}

	return <div className="flex flex-col gap-2">
		<div id="listeInputParcours">
			{
			value.map((item, index) => (
				<div key={item+index}>

					Parcour {
					index + 1
				}
					{
					attributs.map((attribut, ind) => (
						<>
							<p key={attribut+ind}>{attribut}: {
								item[attribut]
							}</p>
						</>
					))
				} </div>
			))
		}
			<div> {
				attributs.map((attribut, ind) => (
					<input key={attribut+ind} id={
							"input" + tag + attribut + ind
						}
						type="text"
						placeholder={attribut}/>
				))
			}</div>
		</div>

		<button onClick={handleAddItem}>Ajouter</button>
	</div>
}
