import Gridling from '../Gridling/Gridling'
import * as mapsService from '../../../utilities/maps-service'
import gridArray from '../../../utilities/grid-init'
import './ViewMap.css'

export default function ViewMap({ bMap, user, mapsBinder }) {
    const foeDetails = bMap.attacks.map(gridObj => {
        if (!!gridObj.foe) return gridObj 
    })
    const foeCoords = []
    let finalCoordArray // = []
    const coordinatesArray = []
    parseFoes()

    function parseFoes() {
        foeCoords.push(...foeDetails.map(foeDetail => [foeDetail.x, foeDetail.y]))

        let finalCoordArrayHelper = [...foeDetails.map(foeDetail => mapsService.calculateAttack(foeDetail.attack, foeDetail.x, foeDetail.y))]
        finalCoordArray = finalCoordArrayHelper.flat()
    }

    function handleHover() {

    }

    function handleClick() {

    }

    function handleMouseOut() {

    }

    async function handleDelete() {
        if(user._id === bMap.user) {
        await mapsService.deleteOne(bMap)
        mapsBinder()
        }
    }
    return(
        <>
        <br/> <br/> <br/>
            <h3>{bMap.name}</h3>
            <div className='MapGrid grid-sections'> 
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
            <button onClick={handleDelete} >DELETE</button>
        </>
    )
}