import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import * as mapsService from '../../../utilities/maps-service'
import { useState } from 'react'
import gridArray from '../../../utilities/grid-init'

export default function MapGrid({ handleGridChange, selectedFoe, handleSubmit }) {
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
        if (foeCoords.find((array) => (array[0] === x && array[1] === y))) {
            showFoe(x,y)
        } else if (Object.keys(selectedFoe).length === 0) return
        setFoeCoords([...foeCoords, [x,y, selectedFoe._id]])
        handleGridChange({
            x: x,
            y: y,
            foe: selectedFoe._id,
            attack: selectedFoe.attacks
        })
        const attack = selectedFoe.attacks

        // iterates current finalCoordArray, adds calculateAttack arrays, 
        //then destroys repeats by converting to set then back to array
        const newArray = Array.from(new Set([...finalCoordArray, ...mapsService.calculateAttack(attack, x, y)]))
        setFinalCoordArray(newArray)

    }

    function showFoe(x,y) {
        return
    }

    function handleFullSubmit(evt) {
        evt.preventDefault()
        setFinalCoordArray([])
        setFoeCoords([])
        handleSubmit()
    }

    return(
        <>
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
           <form onSubmit={handleFullSubmit}>  
                <button className='grid-save-button' type='submit'>Submit</button>
            </form>
            </>
    )
}