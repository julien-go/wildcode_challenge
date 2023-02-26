const Form = () => {
	return (
		<>	
			<h2>Ajouter un(e) Argonaute</h2>
			<form className="new-member-form">
				<label htmlFor='name'>Nom de l'Argonaute</label>
				<input id='name' name='name' type="text" maxLength={45}/>
				<input type="submit" value={'Envoyer'}/>
			</form>
		</>

	)
}

export default Form