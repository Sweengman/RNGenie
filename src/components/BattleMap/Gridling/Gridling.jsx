import './Gridling.css'
import { useState } from 'react'

export default function Gridling({ gridling, coordinatesArray, finalCoordArray, foeCoords, handleHover, handleMouseOut, handleClick }) {
    const [foe, setFoe] = useState('')
    const [attack, setAttack] = useState('')
    let x = gridling.x
    let y = gridling.y

    if(!checkGrid(foeCoords, foe, setFoe, 'foe')) {
        if(!checkGrid(finalCoordArray, attack, setAttack, 'attack')) {
            checkGrid(coordinatesArray, attack, setAttack, 'attack')
        }
    }
    

    function checkGrid(arrayCoords, setee, setter, newVal) {
        if(arrayCoords) {
            if (arrayCoords.find((array) => (array[0] === x && array[1] === y))) {
                compareSets(setee, newVal, setter)
                return true
            } else if (arrayCoords && arrayCoords !== finalCoordArray) {
                compareSets(setee, '', setter)
                return false
            }
        }
    }
    //helper function 
    function compareSets(setee, newVal, setter) {
        if (setee === newVal) {
        } else if (setee !== newVal) {
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