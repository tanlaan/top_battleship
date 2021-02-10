import Ship from './Ship'
import coordinateToIntegers, {getRandomInt} from './coordinates'

const GameBoard = (state) =>{
    const playBoard = initBoard()
    const moveBoard = initBoard()
    const ships = []

    if (state) {

        // Copy play and move boards
        for (let x = 0; x < playBoard.length; x++) {
            for ( let y = 0; y < playBoard[0].length; y++) {
                playBoard[x][y] = state.playBoard[x][y]
                moveBoard[x][y] = state.moveBoard[x][y]
            }
        }

        // Copy ships array
        for (let i = 0; i < state.ships.length; i++) {
            ships[i] = state.ships[i]
        }
    }

    const placeShip = (length, coordinate, orientation='H') => {
        const [x, y] = coordinateToIntegers(coordinate)  
        const newShip = Ship(length)
        const positions = {}

        // Is our entire ship on the game board?
        if (!isValidMove(x, y, length, orientation)) return false
        // Calculate all the coordinates it will take up
        for ( let i = 0; i < length; i++ ) {
            if (orientation === 'H') {

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
            let [x, y] = coordinateToIntegers(coordinates[i])
            playBoard[x][y] = positions[coordinates[i]]
        }
        
        // Add ship to player's ship list
        ships.push(newShip)

        // Success!
        return true
    }

    const placeShipRandomly = (length, orientation) => {
        let wasPlayed = false
        if (!orientation) {
            let chance = getRandomInt(2)
            if (chance === 0) {
                orientation = 'H'
            } else {
                orientation = 'V'
            }
        }
        while (!wasPlayed) {
            const x = getRandomInt(10)
            const y = getRandomInt(10)
            wasPlayed = placeShip(length, x+','+y, orientation)
        }
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

    const isValidMove = (x, y, length, orientation) => {
        // Check coordinate out of bounds
        let xBoundary
        let yBoundary
        if (orientation === 'H') {
            xBoundary = 10
            yBoundary = 10 - length
        } else {
            xBoundary = 10 - length
            yBoundary = 10
        }
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
            let [x, y] = coordinateToIntegers(keys[i])
            if (typeof playBoard[x][y] !== 'undefined') return false
        }
        return true
    }
    
    return {
        isLoser,
        receiveAttack,
        placeShip,
        placeShipRandomly,
        playBoard,
        moveBoard,
        ships
    }
}

const initBoard = () => {
    const newBoard = []
    for ( let i = 0; i < 10; i++) {
        newBoard[i] = new Array(10).fill()
    }
    return newBoard
}

export default GameBoard
