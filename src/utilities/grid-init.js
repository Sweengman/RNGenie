//calculates initial gridArray in full then imports to MapGrid to avoid rerenders

let gridArray = []
for (let i = 0; i < 20; i++) {
    gridArray.push([])
    for (let j = 0; j < 20; j++) {
        gridArray[i].push(0)
    }   
}

initializeModelGrid()


function initializeModelGrid() {
    for (let i = 0; i < gridArray.length; i++) {
        for (let j = 0; j < gridArray[i].length; j++) {
            gridArray[i][j] = {
                value: 0,
                x: i,
                y: j,
            }
        }
    }
}


export default gridArray