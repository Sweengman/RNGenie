import sendRequest from './send-request'
const BASE_URL = 'https://rngeniecli.onrender.com/api/foes'

export function saveFoe(foeData) {
    return sendRequest(BASE_URL + '/new', 'POST', foeData)
}

export function viewFoes(user) {
    return sendRequest(BASE_URL + `/${user.email}`)
}