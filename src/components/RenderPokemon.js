import { Modale } from "../components/Modale";
import { useState } from "react";
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

  function toggle() {
    setModale(!modale);
  }
  return (
    <div className={style}>
      <div className="flex p-2 ">
        <img className="w-[100px] h-[100px] mr-2" src={image} alt={name} />
        <div className="m-2 flex flex-col">
          <p>#{id}</p>
          <p>{name}</p>
          <p>Type: {type}</p>
          <button className=" bg-slate-300 mt-1 rounded" onClick={toggle}>
            Dettagli
          </button>
        </div>
      </div>
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
