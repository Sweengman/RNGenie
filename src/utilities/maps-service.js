import * as mapsAPI from './maps-api'

export async function saveMap(mapData) {
    const map = await mapsAPI.saveMap(mapData)
}