import sendRequest from './send-request'
const BASE_URL = 'https://rngenie.onrender.com/api/maps'

export function saveMap(mapData) {
    return sendRequest(BASE_URL, 'POST', mapData)
}