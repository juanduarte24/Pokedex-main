import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrainerG } from '../store/slices/trainerName.slice'
import { Link, useNavigate } from 'react-router-dom'
import './styles/home.css'
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
        <div className='container-1'>

            <div className='container-home'>
                <header className='home-banner'>


                    <img className='home-img' src="/img/banner.png" alt="" />

                </header>
                <h2 className='home-subtitle'>Hi Trainer!</h2>
                <p className='home-p'>To start with the app, give me your trainer name! </p>
                <form onSubmit={handleSubmit} className='home-form'>
                    <input placeholder='Enter your Trainer Name' className='home-input' type="text" ref={inputTrainer} />
                    <button className='home-button'>Gotta catch'em all!</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage
