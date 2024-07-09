import { Modale } from "../components/Modale";
import { useEffect, useState } from "react";
import "../index.css";

export const RenderPokemon = ({
	id,
	image,
	name,
	type,
	hp,
	atk,
	def,
	spa,
	spd,
	speed,
	onClick,
}) => {
	const style = type + " type-container   ";
	const [modale, setModale] = useState(false);
	const [description, setDescription] = useState([]);
	function toggle() {
		setModale(!modale);
	}

	// useEffect(() => {
	// 	async function getDescription(id) {
	// 		const res = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}`);
	// 		let data = res.json();
	// 		data.map(async (des) => {
	// 			return await des.descriptions;
	// 		});
	// 		setDescription(data);
	// 		console.log(data);
	// 	}
	// 	getDescription(id);
	// }, [id]);

	return (
		// Card Principale
		<div className={style}>
			<div className="flex gap-2 ">
				<img className="w-[100px] h-[100px] mr-2" src={image} alt={name} />
				<div className="flex flex-col gap-2">
					<p>#{id}</p>
					<p>{name}</p>
					<p>{description}</p>
					<p>Type: {type}</p>
					<button className="p-2 rounded bg-slate-300" onClick={toggle}>
						Dettagli
					</button>
				</div>
			</div>
			{/* Modale */}
			{modale && (
				<Modale
					name={name}
					image={image}
					type={type}
					atk={atk}
					def={def}
					spa={spa}
					spd={spd}
					speed={speed}
					hp={hp}
					id={id}
					onClick={onClick}
					toggle={toggle}
					modale={modale}
				/>
			)}
		</div>
	);
};
