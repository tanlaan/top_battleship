import Ship from './Ship'
import coordinateToIntegers from './coordinates'

const GameBoard = () =>{
    const playBoard = initBoard()
    const moveBoard = initBoard() 
    const ships = []
    const placeShip = (length, coordinate, orientation='H') => {
        const [x, y] = coordinateToIntegers(coordinate)
        const newShip = Ship(length)
        const positions = {}

        // Is our entire ship on the game board?
        if (!isValidMove(x, y, length)) return false

        // Calculate all the coordinates it will take up
        for ( let i = 0; i < length; i++ ) {
            if (orientation === 'V') {

                // We are 'increasing' Vertically
                positions[x + ','  + (y + i)] = () => newShip.hit(i)
            } else {

                // We are 'increasing' horizontally
                positions[(x + i) + ',' + y] = () => newShip.hit(i)
            }
        }
        // Verify no overlapping plays
        if (!isValidPlay(positions, playBoard)) return false 

        // Integrate new ship positions into playBoard
        const coordinates = Object.keys(positions)
        for (let i = 0; i < coordinates.length; i++ ) {
            let [x, y] = coordinates[i].split(',')
            playBoard[x][y] = positions[coordinates[i]]
        }
        
        // Add ship to player's ship list
        ships.push(newShip)

        // Success!
        return true
    }
    
    const receiveAttack = (coordinate) => {
        // Returns true if hit, false if miss
        const hit = 'X'
        const miss = '/'
        const [x, y] = coordinateToIntegers(coordinate)

        // Check opponents playBoard for hit
        if(typeof playBoard[x][y] !== 'undefined') {
            playBoard[x][y]()
            playBoard[x][y] = hit
            return true
        } else {
            playBoard[x][y] = miss
            return false
        }
    }

    const isLoser = () => {
        let allSunk = true
        for (let i = 0; i < ships.length; i++ ) {
            if (!ships[i].isSunk()) {
                allSunk = false
            }
        }
        return allSunk 
    }

    const isValidMove = (x, y, length) => {
        // Check coordinate out of bounds
        const xBoundary = 10 - length
        const yBoundary = 10 - length
        if (x < 0 || x > xBoundary) return false
        if (y < 0 || y > yBoundary) return false
        return true
    }

    const isValidPlay= (positions, playBoard) => {
        // positions is still an object
        // now we need to convert playboard into
        // an array so we can keep track of our
        // opponent's hits and misses

        let keys = Object.keys(positions)
        for (let i = 0; i < keys.length; i++) {
            let [x, y] = keys[i].split(',')
            if (typeof playBoard[x][y] !== 'undefined') return false
        }
        return true
    }
    
    return {
        isLoser,
        receiveAttack,
        placeShip,
        playBoard,
        moveBoard,
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
