import { useEffect, useState } from "react";
import { RenderPokemon } from "./components/RenderPokemon";

export function PokeApi() {
  const [pokemonData, setPokemonData] = useState([]);
  const [morePokemon, setMorePokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [filterPokemon, setFilterPokemon] = useState("");

  // funzione che permetti di far visualizzare i primi 20 pokemon

  const fetchPokemon = async () => {
    const res = await fetch(morePokemon);
    const data = await res.json();

    setMorePokemon(data.next);

    getPokemon(data.results);
  };

  // funzione che attraverso un ciclo permette di fetchare ulteriori dati

  const getPokemon = (result) => {
    result.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      setPokemonData((prev) => [...prev, data].sort((a, b) => a.id - b.id));
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className=" h-screen flex flex-col w-screen items-center mb-2">
      <p className="font-bold font mt-1 text-2xl mb-2">Pokedex</p>
      {/* input con filtro */}
      <input
        className="bg-slate-200 p-2 rounded-lg"
        placeholder="Cerca..."
        type="text"
        value={filterPokemon}
        onChange={(e) => setFilterPokemon(e.target.value)}
      />
      <div className="w-full flex flex-wrap justify-center m-2 font-semibold capitalize">
        {pokemonData
          .filter((pokemon) => {
            if (filterPokemon === "") {
              return pokemon;
            } else if (pokemon.name.includes(filterPokemon)) {
              return pokemon;
            }
          })
          .map((p, index) => (
            <div key={index}>
              <RenderPokemon
                id={p.id}
                name={p.name}
                image={p.sprites.other.dream_world.front_default}
                type={p.types[0].type.name}
                hp={p.stats[0].base_stat}
                atk={p.stats[1].base_stat}
                def={p.stats[2].base_stat}
                spa={p.stats[3].base_stat}
                spd={p.stats[4].base_stat}
                speed={p.stats[5].base_stat}
              />
            </div>
          ))}
      </div>
      {/*bottone per fetchare altri 20 pokemon  */}
      <button
        className="bg-slate-300 font-semibold rounded w-fit justify-center mb-3 p-2 "
        onClick={() => fetchPokemon()}
      >
        Mostra Più Pokemon
      </button>
    </div>
  );
}
