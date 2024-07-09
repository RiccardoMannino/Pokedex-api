import "../index.css";

export function Modale({
	image,
	id,
	name,
	type,
	hp,
	atk,
	def,
	spa,
	spd,
	speed,
	description,
	modale,
	toggle,
}) {
	const style =
		type +
		" type-container  flex  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-fit h-fit p-2 z-10 mx-auto ";

	return (
		modale && (
			<div className="fixed top-0 left-0 w-full h-full z-9 bg-zinc-500/50 ">
				<div className={style}>
					<div>{name}</div>
					<div className="grid grid-rows-3 p-2">
						<div className="grid grid-cols-2">
							<img
								className="w-[100px] h-[100px] mr-2"
								src={image}
								alt={name}
							/>
							<div className="content-center text-center">
								<p>Tipo: {type}</p>
							</div>
						</div>

						<div className="grid grid-cols-2 grid-rows-2 gap-2 my-6">
							<p>Attacco: {atk}</p>
							<p>Punti Vita: {hp}</p>
							<p>Difesa: {def}</p>
							<p>Attacco speciale: {spa}</p>
							<p>Difesa speciale: {spd}</p>
							<p>Velocità: {speed}</p>
						</div>
						<div className="grid grid-rows-2">
							<p>
								{id < 29
									? `Descrizione: ${description}`
									: `Descrizione non disponible`}
							</p>
							<button
								className=" place-self-center rounded h-[30px] mt-3 items-end bg-slate-300 px-3"
								onClick={toggle}
							>
								Chiudi
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
