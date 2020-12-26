import Ship from './Ship'

const GameBoard = () =>{
    const placeShip = (playBoard, ships, length, coordinate, orientation='H') => {
        const newShip = Ship(length)
        for ( let i = 0; i < length; i++ ) {
            const x = coordinate.slice(0, 1)
            const y = coordinate.slice(1)
            if (orientation === 'H') {

                // We are increasing horizontally
                playBoard[x + (Number(y) + i)] = () => newShip.hit(i)
            } else {

                // We are increasing vertically
                // So coerce a new letter
                const newX = String.fromCharCode(x.charCodeAt(0) + i )
                playBoard[newX + y] = () => newShip.hit(i)
            }
        }
        ships.push(newShip)
        // Success!
        return true
    }
    const playerPlayBoard = {}
    const computerPlayBoard = {}
    const playerMoveBoard = initBoard()
    const computerMoveBoard = initBoard()
    const playerShips = []
    const computerShips = []
    
    return {
        placeShip,
        playerPlayBoard,
        computerPlayBoard,
        playerMoveBoard,
        computerMoveBoard,
        playerShips,
        computerShips
    }
}

const initBoard = () => {
    const newBoard = []
    for ( let i = 0; i < 10; i++) {
        newBoard[i] = new Array(10)
    }
    return newBoard
}

export default GameBoard
