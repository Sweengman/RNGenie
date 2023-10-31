import { Link } from 'react-router-dom'

export default function Map({ bMap }) {
    <Link to={`/battlemaps/${bMap._id}`}><button>{bMap.name}</button></Link>
    

}