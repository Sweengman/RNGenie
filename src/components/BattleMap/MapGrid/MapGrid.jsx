import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import gridArray from '../../../utilities/grid-init'
import * as mapsService from '../../../utilities/maps-service'
import { useState } from 'react'

export default function MapGrid({state, handleChange, selectedFoe}) {
    const [coordinatesArray, setCoordinatesArray] = useState([])
    const [finalCoordArray, setFinalCoordArray] = useState([])
    const [foeCoords, setFoeCoords] = useState([])

    let timeOutID
    //calculate attack calculates an array of every coordinate affected by attack range
    function handleHover(x,y) {
        clearTimeout(timeOutID)
        if (Object.keys(selectedFoe).length === 0) return
        const attack = selectedFoe.attacks
         setCoordinatesArray(mapsService.calculateAttack(attack, x, y))
    }

    function handleMouseOut() {
        timeOutID = setTimeout(setCoordinatesArray, 500, [])
        
    }

    function handleClick(x,y) {
        setFoeCoords([...foeCoords, [x,y]])
        const attack = selectedFoe.attacks

        // iterates current finalCoordArray, adds calculateAttack arrays, 
        //then destroys repeats by converting to set then back to array
        const newArray = Array.from(new Set([...finalCoordArray, ...mapsService.calculateAttack(attack, x, y)]))
        setFinalCoordArray(newArray)
        console.log(finalCoordArray)
    }
    return(
        <div className='MapGrid' > 
           {gridArray.map(array => array.map(gridling => <Gridling 
           gridling={gridling} 
           coordinatesArray={coordinatesArray} 
           finalCoordArray={finalCoordArray}
           foeCoords={foeCoords}
           handleHover={handleHover} 
           handleMouseOut={handleMouseOut}
           handleClick={handleClick}
           />))}
        </div>
    )
}