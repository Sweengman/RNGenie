import { viewMaps } from '../../utilities/maps-service'
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Map from '../../components/BattleMap/Map/Map'
import ViewMap from '../../components/BattleMap/ViewMap/ViewMap'

export default function NewMap({ battleMaps, user, mapsBinder }) {
    return(
    <>
        { battleMaps.length ?
            <>
            {battleMaps.map(bMap => <ViewMap bMap={bMap} user={user} mapsBinder={mapsBinder} />)}
            </>
                :
                <p>Loading...</p>
        }
    </>
    )
}