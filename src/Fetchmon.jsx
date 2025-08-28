import React, { useState } from 'react'

function Fetchmon(){

    const[PokemonName,setPokemonName]= useState("");
    return (
        <>
        <p className='text-6xl text-center'>Fetchémon</p>
        <div className="flex justify-center gap-2 mb-10 pt-5">

        <input
          type="text"
          placeholder="Search a Pokémon..."
        //   value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="border-2 border-gray-400 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>
        <div className='pl-5 '>
        <p className='text-4xl text-left pb-4 pt-4'>{PokemonName} details</p>
        <p className='text-4xl text-left pb-4'>Pokemon Id :</p>
        <p className='text-4xl text-left pb-4'>Pokemon Type :</p>
        <p className='text-4xl text-left pb-4'>Pokemon ability :</p>
        <p className='text-4xl text-left pb-4'>Pokemon height :</p>
        <p className='text-4xl text-left pb-4'>Pokemon width :</p>
        </div>
        </>
    )
}
export default Fetchmon
