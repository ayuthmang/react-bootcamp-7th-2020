import React, { useEffect, useState } from 'react'
import PokemonList from './PokemonList'
import { fetchPokemons } from './pokemon-api'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemons().then((data) => {
      console.log(data)
      setPokemons(data)
    })
  }, [])

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
