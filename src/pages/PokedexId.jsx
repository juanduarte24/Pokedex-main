import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokedexId.css'

const PokedexId = () => {


    const { id } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

    const [pokemon, getSinglePokemon] = useFetch(url)

    useEffect(() => {
        getSinglePokemon()
    }, [id])

    console.log(pokemon)
    return (
        <article>
           
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            
            <h2 className='pokeid-title'>{pokemon?.name}</h2>
        </article>
    )
}

export default PokedexId