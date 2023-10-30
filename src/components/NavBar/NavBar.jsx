import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user }) {
    function handleLogOut() {
        userService.logOut()

        SpeechSynthesisUtterance(null)
    }

    return(
        <nav>
            <Link to='/battlemaps'>BattleMaps</Link>
            &nbsp; | &nbsp;
            <Link to='/battlemaps/new'>New Battlemap</Link>
            &nbsp; | &nbsp;
            <Link to='/foes'>Foes</Link>
            &nbsp; | &nbsp;
            <Link to='/foes/new'>New Foe</Link>
            &nbsp; | &nbsp;
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name} </span>
            &nbsp; | &nbsp;
            <Link to="" onClick={ handleLogOut }>Log Out</Link>
        </nav>
    )
} 