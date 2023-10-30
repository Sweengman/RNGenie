import './Gridling.css'
import { useState } from 'react'

export default function Gridling({ gridling, coordinatesArray, handleHover }) {
    const [foe, setFoe] = useState('')
    const [attack, setAttack] = useState('')
    let x = gridling.x
    let y = gridling.y
    
    // function checkCoordinates() {
    //     for (let array of coordinatesArray) {

    //     }
    // }
    if (coordinatesArray.find((array) => array[0] === x && array[1] === y)) {
        compareSets(foe, 'foe', setFoe)
        compareSets(attack, 'attack', setAttack)
    } else {
        compareSets(foe, '', setFoe)
        compareSets(attack, '', setAttack)
    }
    
    //helper function 
    function compareSets(set, comp, setter) {
        if (set !== comp) {
            setter(comp)
        }
    }

        return(
        <div className={`Gridling ${foe} ${attack}`} name={[x,y]} onMouseEnter={() => handleHover(x, y)}>
            {x}/{y}
        </div>
    )
}