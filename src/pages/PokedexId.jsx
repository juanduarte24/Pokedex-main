import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    const firstType = pokemon?.types[0].type.name
    return (

        <div className='pokemon-container'>
            <header className='pokedexId-header'>
                <div className='img-container'>
                    <Link to={'/pokedex'}>

                        <img className='img2' src="/img/Captura.PNG" alt="" />
                    </Link>
                </div>
            </header>
            <div className='container-card'>

                <article className={`pokemon-card ${firstType}-border`}>

                    <div className={`header-card ${firstType}-gradient`}>
                        <img
                            src={pokemon?.sprites?.other["official-artwork"]?.front_default}
                            alt={pokemon?.name}
                            className="pokemon-image"
                        />
                    </div>
                    <div className="pokemon-details">
                        <h2 className="pokeid-title">#{pokemon?.id} {pokemon?.name}</h2>
                        <hr className='pokecard-hr' />
                        <div className="pokemon-measurements">
                            <p><b>Peso:</b> {pokemon?.weight} cm</p>
                            <p><b>Altura:</b> {pokemon?.height} kg</p>
                        </div>
                        <div className='abilities-container'>

                            <div className="pokemon-types">
                                <h3>Type</h3>
                                <ul>
                                    {pokemon?.types.map((typeInfo) => (
                                        <li className="pokecard-typename" key={typeInfo.type.url}>
                                            {typeInfo.type.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="pokemon-abilities">
                                <h3>Abilities</h3>
                                <div className="pokemon-details-row">
                                    <ul>
                                        {pokemon?.abilities.map((abilities) => (
                                            <li key={abilities.ability.name}>{abilities.ability.name}</li>
                                        ))}
                                    </ul>
                                    {/* Aquí puedes agregar detalles específicos de las habilidades */}
                                </div>
                            </div>
                        </div>
                        <hr className='pokecard-hr' />
                        <div className="pokemon-stats">
                            <h3>Stats</h3>
                            <div className='pokemon-details-stats'>
                                <ul className='pokecard-stats'>
                                    {
                                        pokemon?.stats.map(stats => (
                                            <li className='pokecard-stat' key={stats.stat.url}>
                                                <h4 className='pokecard-stat-name'>{stats.stat.name}</h4>
                                                <span className={`pokecard-stat-name-value ${firstType}-color`}>{stats.base_stat}/150</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                                {/* Aquí puedes agregar detalles específicos de las estadísticas */}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default PokedexId