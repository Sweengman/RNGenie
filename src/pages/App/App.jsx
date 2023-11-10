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
  const [foes, setFoes] = useState([])
  const [battleMaps, setBattleMaps] = useState([])
  const foesRef = useRef(foes)
  const mapsRef = useRef(battleMaps)

  useEffect(() => mapsBinder, [])
  useEffect(() => foesBinder, [])

  async function foesBinder() {
    let foesList
    try {
      foesList = await viewFoes(user)
      if(!!foesList.length && foesList !== foes) {
        setFoes(foesList)
      }
      foesRef.current = foesList
    } catch(err) {
      console.error(err)
    }
  }

  async function mapsBinder(deletedMap) {
    if (!!deletedMap) return setBattleMaps(battleMaps.filter(map => {if(map != deletedMap) return map }))
    let mapsList
    try {
      mapsList = await viewMaps(user)
      if(!!mapsList.length && mapsList !== battleMaps) {
        setBattleMaps(mapsList)
      } else if(!mapsList.length) {setBattleMaps([])}
      mapsRef.current = mapsList
    } catch(err) {
      console.error(err)
    }
  }

  
  return (
    <main className="App">
      { user ? console.log(user) : console.log('nuthin') }
      { user ?
        <> 
          <NavBar user={user} />
          <h1>Welcome to RNGenie!</h1>
          <Routes>
            <Route path="/battlemaps/new" element={ <NewMap user={user} foes={foes} mapsBinder={mapsBinder} /> } />
            <Route path="/battlemaps" element={ <MapsList user={user} battleMaps={battleMaps} mapsBinder={mapsBinder} /> } />
            <Route path="/foes/new" element={ <NewFoes user={user} foesBinder={foesBinder} /> } />
            <Route path="/foes" element={ <FoesList user={user} foes={foes} /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}