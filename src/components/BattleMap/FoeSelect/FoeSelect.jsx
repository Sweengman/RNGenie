import './FoeSelect.css'
import Foe from '../../Foe/Foe'
import { useState } from 'react'


export default function FoeSelect({ foes, user, handleSelect}) {
    const [selector, setSelector] = useState({})

    function handleSelector(foe) {
        setSelector(foe)
        handleSelect(foe)
    }
    return(
        <div className="FoeSelect">
            FoeSelect
            {foes ? 
            foes.map(foe => <Foe foe={foe} user={user} selector={selector} handleSelector={handleSelector} />)
            : null
            }
        </div>
    )
}