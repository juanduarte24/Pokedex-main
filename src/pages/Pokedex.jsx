import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCards from '../components/PokeCards'
import './styles/input.css'
import SelectType from '../components/SelectType'

const Pokedex = () => {

    const [inputValue, setInputValue] = useState('')
    const [selectValue, setSelectValue] = useState('allPokemons')
    console.log(selectValue)


    const trainer = useSelector(reducer => reducer.trainer)

    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
    const [pokemons, getAllPokemons ,getPokemonsByType] = useFetch(url)

    useEffect(() => {
        if(selectValue === 'allPokemons'){
            
            getAllPokemons()
        
        }else{
            getPokemonsByType(selectValue)
        }

    }, [selectValue])
    const inputSearch = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setInputValue(inputSearch.current.value.trim().toLowerCase())

    }
    // console.log(pokemons)

    const cbFilter = poke => poke.name.includes(inputValue)

    

    console.log(selectValue)
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
                <SelectType setSelectValue={setSelectValue}/>
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