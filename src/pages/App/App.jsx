
import './App.css'; 
import { Route, Routes } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import NewMap from '../NewMap/NewMap'
import MapsList from '../MapsList/MapsList'


export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      { user ?
        <> 
          <NavBar user={user} />
          <Routes>
            <Route path="/battlemaps/new" element={ <NewMap /> } />
            <Route path="/battlemaps" element={ <MapsList /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />

      }
    </main>
  );
}