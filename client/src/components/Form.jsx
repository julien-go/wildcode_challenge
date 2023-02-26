import { useState } from "react"

const Form = ({addData}) => {
	const [name, setName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		addData(name)
		setName('')
	}
	
	return (
		<>	
			<h2>Ajouter un(e) Argonaute</h2>
			<form className="new-member-form" onSubmit={(e)=> handleSubmit(e)}>
				<label htmlFor='name'>Nom de l'Argonaute</label>
				<input id='name' name='name' placeholder="Charalampos" type="text" value={name} maxLength={45} onChange={(e)=> setName(e.target.value)}/>
				<input type="submit" value={'Envoyer'}/>
			</form>
		</>

	)
}

export default Form