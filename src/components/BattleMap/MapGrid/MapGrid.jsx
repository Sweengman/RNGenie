import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import gridArray from '../../../utilities/grid-init'
import * as mapsService from '../../../utilities/maps-service'
import { useState } from 'react'

export default function MapGrid({state, handleChange, selectedFoe}) {
    const [coordinatesArray, setCoordinatesArray] = useState([])

    function handleHover(evt) {
        const [x, y] = evt.target.coordinates
        const attack = selectedFoe.attacks
         setCoordinatesArray(mapsService.calculateAttack(attack, x, y))
    }
    return(
        <div className='MapGrid' > 
           {gridArray.map(array => array.map(gridling => <Gridling gridling={gridling} coordinatesArray={coordinatesArray} handleHover={handleHover} />))}
        </div>
    )
}