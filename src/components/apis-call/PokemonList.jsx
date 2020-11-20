import React from 'react'
import PokemonDetail from './PokemonDetail'

function PokemonList(props) {
  return (
    <>
      <ol>
        {props.pokemons.results &&
          props.pokemons.results.map((pokemon) => (
            <PokemonDetail {...pokemon} />
          ))}
      </ol>
    </>
  )
}

export default PokemonList
