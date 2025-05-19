import {useState} from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

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
				<div key={item+index} className="flex flex-wrap m-1">
					
				<Card className={"w-full flex flex-col gap-2 rounded-lg "}>
					<CardHeader>
						<CardTitle>Parcour {
					index + 1
				} </CardTitle>
				<CardDescription>
				{
					attributs.map((attribut, ind) => (
						<>
							<p key={attribut+ind}>{attribut}: {
								item[attribut]
							}</p>
							
						</>
					))
				}
				</CardDescription>
					</CardHeader>	
				
				</Card>
					 </div>
			))
		}
			<div className="flex flex-col gap-2"> {
				attributs.map((attribut, ind) => (
					<input key={attribut+ind} id={
							"input" + tag + attribut + ind
						}
						type="text"
						placeholder={attribut} className="p-2 outline-0 bg-theme-3/10 rouded-lg w-full rounded-lg "/>
				))
			}</div>
		</div>

		<button onClick={handleAddItem}>Ajouter</button>
	</div>
}
