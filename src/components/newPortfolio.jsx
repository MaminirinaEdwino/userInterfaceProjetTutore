import {useState} from "react";
import InputComponents from "./inputComponents";
import SelectComponents from "./selectComponents";
import TextAreaComponents from "./TexteAreaComponents";
import InputArrayComponents from "./InputArrayComponents";
import InputArraySimpleComponents from "./InputArraySImpleComponents";
import ModalSuccessCreatePortfolio from "./modalSuccesCreatePortfolio";
import { CardTitle } from "./ui/card";

export default function NewPortfolio({user}) {
	const [step, setStep] = useState(1)
    const [displayModal, setDisplayModal] = useState("none")
	const [template, setTemplate] = useState(0)
	const [loisir, setLoisir] = useState([])
	const [parcours, setParcours] = useState([])
	const [experience_professionnelle, setExperienceProfessionnelle] = useState([])
	const [skills, setSkills] = useState([])
	const [langue, setLangue] = useState([])
	const [lien_portfolio, setLienPortfolio] = useState("")
	const [titre, setTitre] = useState("")
	const [domaine, setDomaine] = useState("")
	const [lettre_introduction, setLettre_introduction] = useState("")
    const [idPortfolio, setIdPortfolio] = useState(0)
    const IntParser = (value) => {
        let newValue = []
        value.forEach(element => {
            newValue.push({ titre: element.titre, niveau: parseInt(element.niveau) })
        });
        return newValue

    }

    const handleCreatePortfolio = async (e)=>{
        e.preventDefault()
        const portfolio = {
            lien_portfolio: user["username"]+titre,
            template: template-1,
            titre: titre,
            lettre_introduction: lettre_introduction,
            loisir: loisir,
            domaine: domaine,
            parcours: parcours,
            experience_professionnelle: experience_professionnelle,
            skills: IntParser(skills),
            langue: IntParser(langue),
            nombre_visite: 0,
            id_user: user["id"]
        }
        console.log(portfolio)
        await fetch(`http://${window.location.hostname}:1627/portfolio/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + window.localStorage.getItem("token")
            },
            body: JSON.stringify(portfolio)
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setIdPortfolio(res["id"])
        })
        .catch(err=>console.log(err))
        setStep(step + 1)
    }

    const umploadFile = async (e) => {
        e.preventDefault()
        let files = document.getElementById("photo").files[0]
        const formData = new FormData();
        formData.append("file", files);
        await fetch(`http://${window.location.hostname}:1627/portfolio/upload/photo/`+idPortfolio, {
            method:"PATCH",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("token")
            },
            body: formData
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setDisplayModal("block")
        }).catch(err=>console.log(err))
    }

	const handleNextStep = (e) => {
		e.preventDefault()
		setStep(step + 1)
	}
	const handlePreviousStep = (e) => {
		e.preventDefault()
		if (step > 1) {
			setStep(step - 1)
		}
	}
	return <section className="  border-2 p-3 flex flex-col items-center justify-center text-theme-3 max-w-[95%] rounded-sm w-[95%]">
        <ModalSuccessCreatePortfolio display={displayModal}/>
		<h1 className="text-3xl font-bold text-center ">Nouveau Portfolio</h1>
		<form className="flex flex-col gap-4 mt-10 w-full">
			{
			step === 1 && <div className="step1 w-full flex flex-col ">
				<InputComponents id={"newTitre"}
					label={"Titre du portfolio"}
					name={"newTitre"}
					onchange={setTitre}
					value={titre}
					placeholder={"Titre su portfolio"}/>
				<InputComponents id={"newDomaine"}
					label={"Votre domaine"}
					name={"newDomaine"}
					onchange={setDomaine}
					value={domaine}
					placeholder={"Votre Domaine"}/>
				<TextAreaComponents id={"newLettre"}
					name={"newLettre"}
					placeholder={"Votre lettre d'introduction"}
					label={"Lettre d'introduction"}
					onchange={setLettre_introduction}
					value={lettre_introduction}/>
				<SelectComponents id={"newTemplate"}
					options={
						['Choisir Template', 'template 1', 'template 2', 'template 3', 'template 4', 'template 5', 'template 6', 'template 7']
					}
					value={template}
					onchange={setTemplate}
					label={"Choix Template"}/> {
				titre != "" && domaine != "" && lettre_introduction != "" && template != 0 && <button className="bg-theme-6 text-theme-1 border border-theme-1 p-2 rounded-md"
					onClick={handleNextStep}>Suivant</button>
			} </div>
		}
			{
			step === 2 && <div className="step2">
				<h2 className="text-center mb-3">Inserer votre parcours scolaire</h2>
				<InputArrayComponents id={"parcours"}
					label={"Parcours Scolaire"}
					name={"parcours"}
					onchange={setParcours}
					value={parcours}
					placeholder={"Parcours"}
					tag={"parcours"}
					attributs={
						["titre", "etablissement", "annee"]
					}/> {
				parcours.length > 0 && <button onClick={handleNextStep}>Suivant</button>
			} </div>
		}
			{
			step === 3 && <div className="step3">
				<CardTitle className={'text-center mb-2'}>Inserer vos experience professionnelle</CardTitle>
				<InputArrayComponents id={"xp"}
					label={"Expérience Professionnel"}
					name={"xp"}
					onchange={setExperienceProfessionnelle}
					value={experience_professionnelle}
					placeholder={"Expérience Professionnelle"}
					tag={"xp"}
					attributs={
						["titre", "entreprise", "annee"]
					}/> {
				experience_professionnelle.length > 0 && <button onClick={handleNextStep}>Suivant</button>
			} </div>
		}
        {
			step === 4 && <div className="step4">
				<CardTitle className={"text-center mb-2"}>Inserer vos skills</CardTitle>
				<InputArrayComponents id={"skills"}
					label={"Skills"}
					name={"skills"}
					onchange={setSkills}
					value={skills}
					placeholder={"Skills"}
					tag={"skills"}
					attributs={
						["titre", "niveau"]
					}/> {
				skills.length > 0 && <button onClick={handleNextStep}>Suivant</button>
			} </div>
		}
        {
			step === 5 && <div className="step5">
				<CardTitle className={"text-center mb-2"}>Inserer les langues maitrisées</CardTitle>
				<InputArrayComponents id={"langues"}
					label={"Langues"}
					name={"lang"}
					onchange={setLangue}
					value={langue}
					placeholder={"Langues"}
					tag={"langues"}
					attributs={
						["titre", "niveau"]
					}/> {
				langue.length > 0 && <button onClick={handleNextStep}>Suivant</button>
			} </div>
		}
        {
            step === 6 && <div className="step6">
            <CardTitle className={"text-center mb-2"}>Inserer Vos loisirs</CardTitle>
            <InputArraySimpleComponents id={"loirsir"}
                label={"Loisir"}
                name={"lanloisirg"}
                onchange={setLoisir}
                value={loisir}
                placeholder={"Loisir"}
               /> {
            loisir.length > 0 && <button onClick={handleCreatePortfolio}>Suivant</button>
        } </div>
        }
        {
            step === 7 && <div className="step7 flex flex-col">
            <CardTitle>Ajoutez votre photo de profil pour le portfolio</CardTitle>
            <input type="file" id="photo" name="photo" className="bg-theme-3/10 text-center p-2 rounded-lg m-1"/>
             {
            loisir.length > 0 && <button onClick={umploadFile}>Suivant</button>
        } </div>
        }
			{
			step > 1 && <button onClick={handlePreviousStep}>Précedent</button>
		} </form>
	</section>

}
