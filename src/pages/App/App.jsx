import './App.css'; 
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service'
import { viewFoes } from '../../utilities/foes-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import NewMap from '../NewMap/NewMap'
import MapsList from '../MapsList/MapsList'
import NewFoes from '../NewFoe/NewFoe'
import FoesList from '../FoesList/FoesList'


export default function App() {
  const [user, setUser] = useState(getUser())
  const [foes, setFoes] = useState(null)
  useEffect(() => foesBinder)

  async function foesBinder() {
    let foesList
    try {
      foesList = await viewFoes(user)
    } catch(err) {
      console.error(err)
    } finally {
      if(foesList !== foes) {
        setFoes(foesList)
      }
    }
  }

  return (
    <main className="App">
      { user ?
        <> 
          <NavBar user={user} />
          <Routes>
            <Route path="/battlemaps/new" element={ <NewMap user={user} foes={foes}/> } />
            <Route path="/battlemaps" element={ <MapsList /> } />
            <Route path="/foes/new" element={ <NewFoes user={user} /> } />
            <Route path="/foes" element={ <FoesList foes={foes} user={user} /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}