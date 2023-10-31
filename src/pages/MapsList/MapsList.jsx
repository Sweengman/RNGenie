import { viewMaps } from '../../utilities/maps-service'
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Map from '../../components/BattleMap/Map/Map'
import ViewMap from '../../components/BattleMap/ViewMap/ViewMap'

export default function NewMap({ battleMaps }) {
    return(
    <>
        { battleMaps.length ?
            <>
            {battleMaps.map(bMap => <ViewMap bMap={bMap} />)}
            </>
                :
                <p>Loading...</p>
        }
    </>
    )
}