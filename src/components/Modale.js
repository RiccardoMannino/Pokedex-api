import "../index.css";

export function Modale({
  image,
  name,
  type,
  hp,
  atk,
  def,
  spa,
  spd,
  speed,
  modale,
  toggle,
}) {
  const style =
    type +
    " type-container  flex  absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-fit p-2 h-[300px] w-[400px] z-10 mx-auto ";
  return (
    modale && (
      <div className="z-9  fixed w-full h-full top-0 left-0 bg-zinc-500/50 ">
        <div className={style}>
          <div className="flex p-2  ">
            <img className="w-[100px] h-[100px] mr-2" src={image} alt={name} />
            <div className="m-2 flex flex-col">
              <p>{name}</p>
              <p>Type: {type}</p>
              <button
                className="rounded h-[30px] mt-3 items-end bg-slate-300 px-1"
                onClick={toggle}
              >
                Chiudi
              </button>
            </div>

            <div className="flex flex-col m-2">
              <p>Attack: {atk}</p>
              <p>Hp: {hp}</p>
              <p>Def: {def}</p>
              <p>S.atk: {spa}</p>
              <p>S.def: {spd}</p>
              <p>Sped: {speed}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
