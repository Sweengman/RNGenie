import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import gridArray from '../../utilities/grid-service'

export default function MapGrid() {
    console.log(gridArray)
    return(
        <section className='MapGrid' > 
           {gridArray.map(array => array.map(gridling => <Gridling gridling={gridling} />))}
        </section>
    )
}