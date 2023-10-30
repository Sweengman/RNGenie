import './Gridling.css'
import { useState } from 'react'

export default function Gridling({ gridling, coordinatesArray, finalCoordArray, foeCoords, handleHover, handleMouseOut, handleClick }) {
    const [foe, setFoe] = useState('')
    const [attack, setAttack] = useState('')
    let x = gridling.x
    let y = gridling.y

    // checkGrid(coordinatesArray, attack, setAttack, 'attack')
    checkGrid(finalCoordArray, attack, setAttack, 'attack')
    checkGrid(foeCoords, foe, setFoe, 'foe')

    function checkGrid(arrayCoords, setee, setter, newVal) {
        if(arrayCoords) {
            if (arrayCoords.find((array) => (array[0] === x && array[1] === y))) {
                compareSets(setee, newVal, setter)
            } else {
                compareSets(setee, '', setter)
            }
        }
    }
    //helper function 
    function compareSets(setee, newVal, setter) {
        if (setee == newVal) {
            return
        } else if (setee != newVal) {
            setter(newVal)
        }
        
    }

        return(
        <div className={`Gridling ${foe} ${attack}`} 
        name={[x,y]} 
        onMouseEnter={() => handleHover(x, y)}
        onMouseLeave={handleMouseOut}
        onClick={() => handleClick(x, y)}
        >
            {x}/{y}
        </div>
    )
}