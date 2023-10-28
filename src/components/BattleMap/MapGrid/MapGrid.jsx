import './MapGrid.css'
import Gridling from '../Gridling/Gridling'
import gridArray from '../../../utilities/grid-init'

export default function MapGrid() {
    
    return(
        <section className='MapGrid' > 
           {gridArray.map(array => array.map(gridling => <Gridling gridling={gridling} />))}
        </section>
    )
}