import Ship from './Ship'

const GameBoard = () =>{
    const placeShip = (playBoard, ships, length, coordinate, orientation='H') => {
        const x = coordinate.slice(0, 1)
        const y = coordinate.slice(1)
        const newShip = Ship(length)
        const positions = {}

        // Is our entire ship on the game board?
        if (!isValidMove(x, y, length)) return false

        // Calculate all the coordinates it will take up
        for ( let i = 0; i < length; i++ ) {
            if (orientation === 'H') {

                // We are increasing horizontally
                positions[x + (Number(y) + i)] = () => newShip.hit(i)
            } else {

                // We are increasing vertically
                // So coerce a new letter
                const newX = String.fromCharCode(x.charCodeAt(0) + i )
                positions[newX + y] = () => newShip.hit(i)
            }
        }
        if (!isValidPlay(positions, playBoard)) return false 

        // Integrate new ship positions into playBoard
        Object.assign(playBoard, positions)
        ships.push(newShip)
        // Success!
        return true
    }

    const isValidMove = (x, y, length) => {
        // Check coordinate out of bounds
        const xBoundary = String.fromCharCode('J'.charCodeAt(0) - length)
        const yBoundary = 10 - length
        if (x < 'A' || x > xBoundary) return false
        if (y < 1 || y > yBoundary) return false
        return true
    }

    const isValidPlay= (positions, playBoard) => {
        let keys = Object.keys(positions)
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] in playBoard) return false
        }
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
