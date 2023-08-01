import React, { useEffect , useState , useRef } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCards from '../components/PokeCards'

const Pokedex = () => {

    const [inputValue, setInputValue] = useState('')

    const trainer = useSelector(reducer => reducer.trainer)
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=200'
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
            <p><span>Welcome {trainer}</span>, here you can find your favorite Pokemon.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputSearch} />
                <button>Search</button>
            </form>
            <div>
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