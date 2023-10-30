import * as mapsAPI from './maps-api'

export async function saveMap(mapData) {
    const map = await mapsAPI.saveMap(mapData)
}

//takes a specific attack and the hover event coordinates, and calculates how the attack will spread
export function calculateAttack(attack, x, y) {
    const coordinateArray = []
    coordinateArray.push([x, y])
    if (attack.spread > 0) return calculateSpread(attack.spread, x, y, coordinateArray)
    
    const nArray = []
    const sArray = []
    const eArray = []
    const wArray = []
    const dispPattern = {
        0: 0,
        1: 1,
        2: 'num'
    }

    calculate(x, (attack.north * -1), x, nArray)
    calculate(x, attack.south, x, sArray)
    calculate(y, attack.east, y, eArray)
    calculate(y, (attack.west * -1), y, wArray)
    
    let disp = dispPattern[attack.displacement]
    
    combine(nArray, 'x')
    combine(sArray, 'x')
    combine(eArray, 'y')
    combine(wArray, 'y')

    return coordinateArray


    //helper functions! Y = Y axis, X = X axis
    function calculate(num, numIncrease, numCurrent, array) {
        // console.log('x:', x, 'y:', y, 'match x or y:', num, 'add this to x or y:', numIncrease, 'should start at x or y then increase', numCurrent)
        const finalNum = num + numIncrease
        if (numCurrent === finalNum) return
        (numCurrent < finalNum) ? numCurrent ++ : numCurrent --
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
            if (dispCheck) disp ++ 
            (direction === 'x') ?
                coordinateArray.push([coordNum, y + disp])
                : coordinateArray.push([x + disp, coordNum])
        }
    }

    function calculateSpread(spread, x, y, finalArray) {
        let xMax = x + spread
        let xMin = x - spread
        let yMax = y + spread
        let yMin = y - spread
        let xArray = []
        let yArray = []
        spreadHelper(x, xMax, xArray)
        spreadHelper(x, xMin, xArray)
        spreadHelper(y, yMax, yArray)
        spreadHelper(y, yMin, yArray)
        combineSpread()
        return finalArray



        //sub-Helper functions for calculateSpread
        function spreadHelper(num, limitNum, array) {
            if (num < limitNum) {
                num ++
                array.push(num)
                spreadHelper(num, limitNum, array)
            } else if (num > limitNum) {
                num --
                array.push(num)
                spreadHelper(num, limitNum, array)
            } else if (num === limitNum) {
                return
        }}

        function combineSpread() {
            if (xArray.length === yArray.length) {
                for (let i = 0; i < xArray.length; i++) {
                    finalArray.push([x, yArray[i]], [xArray[i], y])
                    for (let j = 0; j < xArray.length; j++) {
                        let specificCoord = [xArray[i], yArray[j]]
                        let specificCoordAlt = [xArray[j], yArray[i]]
                        finalArray.push(specificCoord, specificCoordAlt)
        }}}}
    }
}