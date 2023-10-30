import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import gridArray from '../../../utilities/grid-init'
import * as mapsService from '../../../utilities/maps-service'
import { useState } from 'react'

export default function MapGrid({state, handleChange, selectedFoe}) {
    const [coordinatesArray, setCoordinatesArray] = useState([])

    //must flip x and y to be accurate with program based grids
    function handleHover(x,y) {
        if (Object.keys(selectedFoe).length === 0) return
        const attack = selectedFoe.attacks
         setCoordinatesArray(mapsService.calculateAttack(attack, x, y))
    }
    return(
        <div className='MapGrid' > 
           {gridArray.map(array => array.map(gridling => <Gridling gridling={gridling} coordinatesArray={coordinatesArray} handleHover={handleHover} />))}
        </div>
    )
}