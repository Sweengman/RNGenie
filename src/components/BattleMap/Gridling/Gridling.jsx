import './Gridling.css'

export default function Gridling({ gridling }) {
    let value = gridling.value
    let x = gridling.x
    let y = gridling.y
    const gridCodex = {
        0: '!',
    }
        return(
        <div className="Gridling" >
            {gridCodex[value]}
        </div>
    )
}