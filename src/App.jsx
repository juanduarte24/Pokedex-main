import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Pokedex from './pages/Pokedex'
import PokedexId from './pages/PokedexId'
import Page404 from './pages/Page404'
import ProtectedRoutes from './pages/ProtectedRoutes'
function App() {


  return (
    <div className='container'>
      {/* <header>
  <img src="/img/Captura.PNG" alt="" />

      </header> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexId />} />
        </Route>
        <Route path='*' element={<Page404 />} />
      </Routes>

    </div>
  )
}

export default App
