import Ship from './Ship'

const GameBoard = () =>{
    const placeShip = (playBoard, ships, length, coordinate) => {
        const newShip = Ship(length)
        playBoard[coordinate] = () => newShip.hit(0)
        ships.push(newShip)
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