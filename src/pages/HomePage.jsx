import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerG } from '../store/slices/trainerName.slice'
import {useNavigate} from 'react-router-dom'
const HomePage = () => {

    
    const inputTrainer = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }
    
    return (
        <div>
            <h1>POKEDEX</h1>
            <h2>Hi Trainer</h2>
            <p>To start with the app, give me your trainer name! </p>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputTrainer} />
                <button>Gotta catch'em all!</button>
            </form>
        </div>
    )
}

export default HomePage
