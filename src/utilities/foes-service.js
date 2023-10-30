import * as foesAPI from './foes-api'

export async function saveFoe(foeData) {
    const foe = await foesAPI.saveFoe(foeData)
}

export async function viewFoes(user) {
    const foes = await foesAPI.viewFoes(user)
    return foes
}