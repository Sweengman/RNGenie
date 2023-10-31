import './App.css'; 
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { getUser } from '../../utilities/users-service'
import { viewFoes } from '../../utilities/foes-service'
import { viewMaps } from '../../utilities/maps-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import NewMap from '../NewMap/NewMap'
import MapsList from '../MapsList/MapsList'
import NewFoes from '../NewFoe/NewFoe'
import FoesList from '../FoesList/FoesList'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [foes, setFoes] = useState(viewFoes(user))
  const [battleMaps, setBattleMaps] = useState(viewMaps(user))
  const foesRef = useRef(foes)
  const mapsRef = useRef(battleMaps)

  useEffect(() => mapsBinder, [])
  useEffect(() => foesBinder, [])

  async function foesBinder() {
    let foesList
    try {
      foesList = await viewFoes(user)
      if(foesList !== foes) {
        setFoes(foesList)
      }
      foesRef.current = foesList
    } catch(err) {
      console.error(err)
    }
  }

  async function mapsBinder() {
    let mapsList
    try {
      mapsList = await viewMaps(user)
      if(mapsList !== battleMaps) {
        setBattleMaps(mapsList)
      }
      mapsRef.current = mapsList
    } catch(err) {
      console.error(err)
    }
  }

  
  return (
    <main className="App">
      { user ?
        <> 
          <NavBar user={user} />
          <Routes>
            <Route path="/battlemaps/new" element={ <NewMap user={user} foes={foes} mapsBinder={mapsBinder} /> } />
            <Route path="/battlemaps" element={ <MapsList user={user} battleMaps={battleMaps} /> } />
            <Route path="/foes/new" element={ <NewFoes user={user} foesBinder={foesBinder} /> } />
            <Route path="/foes" element={ <FoesList foes={foes} user={user} /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}