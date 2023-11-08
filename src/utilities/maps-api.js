import sendRequest from './send-request'
const BASE_URL = 'https://rngeniecli.onrender.com/api/maps'

export function saveMap(mapData) {
    return sendRequest(BASE_URL + '/new', 'POST', mapData)
}

export function viewMaps(user) {
    return sendRequest(BASE_URL + `/${user.email}`)
}

export function deleteOne(mapID) {
    sendRequest(BASE_URL + '/delete', 'POST', mapID)
}