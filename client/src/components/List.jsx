import {useEffect } from "react"


const List = ({getData, argonauts}) => {
	useEffect(()=> {
		getData()
	}, [])

	return (
		<div>
			<h2>Membres de l'équipage</h2>
			<section className="member-list">
				{argonauts.map((e, i) => <div key={i} className="member-item">{e.name}</div>)}
			</section>
		</div>
	)
}

export default List