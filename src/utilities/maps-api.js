import sendRequest from './send-request'
const BASE_URL = '/api/maps'

export function saveMap(mapData) {
    return sendRequest(BASE_URL, 'POST', mapData)
}