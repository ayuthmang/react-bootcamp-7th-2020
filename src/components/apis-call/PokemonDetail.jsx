import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PokemonDetail(props) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    // fetch
    // fetch(`${props.url}`)
    //   .then((response) => response.json())
    //   .then((data) => setPokemon(data))

    // axios
    // axios.get(`${props.url}`).then((response) => {
    //   setPokemon(response.data)
    // })

    async function startFetch() {
      try {
        const response = await axios.get(`${props.url}`)
        setPokemon(response.data)
      } catch (error) {}
    }
    startFetch()
  }, [props.url])

  console.log(pokemon)
  return (
    <>
      <li>{props.name}</li>
      <img src={pokemon?.sprites?.front_default} alt="pokemon" />
    </>
  )
}

export default PokemonDetail
