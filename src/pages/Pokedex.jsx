import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCards from '../components/PokeCards'
import './styles/input.css'

const Pokedex = () => {

    const [inputValue, setInputValue] = useState('')

    const trainer = useSelector(reducer => reducer.trainer)
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
    const [pokemons, getAllPokemons] = useFetch(url)

    useEffect(() => {
        getAllPokemons()

    }, [])
    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())

    }

    const cbFilter = poke => poke.name.includes(inputValue)
    console.log(inputValue)

    // console.log(pokemons)
    return (
        <>
            <header className='header-pokedex'>
                <div className='header-img'>

                <img src="/img/Captura.PNG" alt="" />
                </div>
            </header>
            <p className='pokedex-title'><span>Welcome {trainer}</span>, here you can find your favorite Pokemon.</p>
            <div className='container-form'>

                <form className='form' onSubmit={handleSubmit}>
                    <input className='input-id' id='input-id' type="text" ref={inputSearch} />
                    <button className='button-id'>Search</button>
                </form>
            </div>
            <div className='container-cards'>
                {
                    pokemons?.results.filter(cbFilter).map(poke => (
                        <PokeCards
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }
            </div>


        </>
    )
}

export default Pokedex