import * as mapsAPI from './maps-api'

export async function saveMap(mapData) {
    const map = await mapsAPI.saveMap(mapData)
}

//takes a specific attack and the hover event coordinates, and calculates how the attack will spread
export function calculateAttack(attack, x, y) {
    attack.north *= -1
    attack.west *= -1
    const coordinateArray = [[x,y]]
    const nArray = []
    const sArray = []
    const eArray = []
    const wArray = []
    const dispPattern = {
        0: 0,
        1: 1,
        2: 'num'
    }

    calculate(x, attack.north, x, nArray)
    calculate(x, attack.south, x, sArray)
    calculate(y, attack.east, y, eArray)
    calculate(y, attack.west, y, wArray)
    
    let disp = dispPattern[attack.displacement]
    
    combine(nArray, 'y')
    combine(sArray, 'y')
    combine(eArray, 'x')
    combine(wArray, 'x')

    return coordinateArray


    //helper functions! Y = Y axis, X = X axis
    function calculate(num, numIncrease, numCurrent, array) {
        const finalNum = num + numIncrease
        if (numCurrent === finalNum) return
        (num < finalNum) ? numCurrent ++ : numCurrent --
        array.push(numCurrent)
        calculate(num, numIncrease, numCurrent, array)
    }

    function combine(array, direction) {
        let dispCheck = false
        if (disp === 'num') {
            disp = 0
            dispCheck = true
        }
        for (let coordNum of array) {
            dispCheck ? disp ++ : null
            (direction === 'x') ?
                coordinateArray.push([coordNum, y + disp])
                : coordinateArray.push([x + disp, coordNum])
        }
    }
}