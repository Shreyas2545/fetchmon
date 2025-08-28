import React, { useState } from 'react';

function Fetchmon() {
  const [PokemonName, setPokemonName] = useState("");
  const [PokemonData, setPokemonData] = useState(null);

  const fetchPokemon = async () => {
    if (!PokemonName) return;

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${PokemonName.toLowerCase()}`
      );
      const data = await res.json();
      console.log(data);
      setPokemonData(data);
    } catch (error) {
      console.log("Error in fetching pokemon data ", error);
      setPokemonData(null);
    }
  };

  return (
    <>
      <p className="text-6xl text-center">Fetchémon</p>

      <div className="flex justify-center gap-2 mb-10 pt-5">
        <input
          type="text"
          placeholder="Search a Pokémon..."
          value={PokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="border-2 border-gray-400 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={fetchPokemon}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      <div className="pl-5 font-light">
        <p className="text-4xl text-left pb-4 pt-4 font-bold">
          {PokemonData ? `${PokemonData.name} details` : "Pokemon details"}
        </p>

        <p className="text-4xl text-left pb-4">
          Pokemon Id: {PokemonData?.id ?? "-"}
        </p>
        <p className="text-4xl text-left pb-4">
          Pokemon Type: {PokemonData?.types?.[0]?.type?.name ?? "-"}
        </p>
        <p className="text-4xl text-left pb-4">
          Pokemon Ability: {PokemonData?.abilities?.[0]?.ability?.name ?? "-"}
        </p>
        <p className="text-4xl text-left pb-4">
          Pokemon Height: {PokemonData?.height ?? "-"}
        </p>
        <p className="text-4xl text-left pb-4">
          Pokemon Weight: {PokemonData?.weight ?? "-"}
        </p>
        <p className="text-4xl text-left pb-4">
          Pokemon Image: {PokemonData?.sprites?.front_default ? (
            <img
              src={PokemonData.sprites.front_default}
              alt={PokemonData.name}
              className="w-40 h-40 mb-5"
            />
          ) : (
            "-"
          )}
        </p>
      </div>
    </>
  );
}

export default Fetchmon;
