import './Foe.css'
import ViewFoe from '../ViewFoe/ViewFoe'
import { useState } from 'react'

export default function Foe({ foe, selector=null, handleSelector=null }) {
    const [details, setDetails] = useState(false)
    const [classSet, setClassSet] = useState('')
    if ((selector._id === foe._id) && (!details)) {
            setClassSet('selected')
            setDetails(true)
        } else if (selector._id !== foe._id) {
        if (details) {
            setClassSet('')
            setDetails(false)
        }
    }

    function handleClick() {
        if (selector)  handleSelector(foe)
        else setDetails(!details)
    }

return(
    <div className={classSet}>
    <button name={foe.name} onClick={handleClick}>{foe.name}</button>
    { details ?
        <ViewFoe foe={foe} />
        :
        null
    }
    </div>
)
}