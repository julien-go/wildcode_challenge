const List = ({argonauts}) => {
	return (
		<div>
			<h2>Membres de l'équipage</h2>
			<section className="member-list">
				{argonauts?.map((e) => <div key={e.id} className="member-item">{e.name}</div>)}
			</section>
		</div>
	)
}

export default List