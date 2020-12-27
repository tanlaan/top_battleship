import Ship from './Ship'

const GameBoard = () =>{
    const playBoards = [{}, {}]
    const moveBoards = [initBoard(), initBoard()]
    const ships =[[], []]
    const placeShip = (player, length, coordinate, orientation='H') => {
        const [x, y] = coordinate.split('')
        const newShip = Ship(length)
        const positions = {}

        // Is our entire ship on the game board?
        if (!isValidMove(x, y, length)) return false

        // Calculate all the coordinates it will take up
        for ( let i = 0; i < length; i++ ) {
            if (orientation === 'V') {

                // We are 'increasing' Vertically
                positions[x + (Number(y) + i)] = () => newShip.hit(i)
            } else {

                // We are 'increasing' horizontally
                // So coerce a new letter
                const newX = String.fromCharCode(x.charCodeAt(0) + i )
                positions[newX + y] = () => newShip.hit(i)
            }
        }
        
        // Verify no overlapping plays
        if (!isValidPlay(positions, playBoards[player])) return false 

        // Integrate new ship positions into playBoard
        Object.assign(playBoards[player], positions)
        
        // Add ship to player's ship list
        ships[player].push(newShip)

        // Success!
        return true
    }
    
    const receiveAttack = (player, coordinate) => {
        const hit = 'X'
        const miss = '/'
        const opponent = player === 0 ? 1 : 0
        const [x, y] = coordinateToIntegers(coordinate)
        

        // Check moveBoard if already played - return false
        if (coordinate in moveBoards[player]) return false

        // Check opponents playBoard for hit
        if (coordinate in playBoards[opponent]) {

            // Run hit() on opponent's ship
            playBoards[opponent][coordinate]()

            // Adding hit to moveBoard
            moveBoards[player][x][y] = hit
        } else {
            moveBoards[player][x][y] = miss
        }

        return true
    }

    const isWinner = () => {
        for (let i = 0; i < ships.length; i++) {
            let allSunk = true
            for (let j = 0; j < ships[i].length; j++ ) {
                if (!ships[i][j].isSunk()) {
                    allSunk = false
                }
            }
            if (allSunk) return true
        }
        return false
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

    const coordinateToIntegers = (coordinate) => {
        // Take in string form, convert to array integers
        let [x, y] = coordinate.split('')
        x = x.charCodeAt(0) - 'A'.charCodeAt(0)
        y = Number(y) - 1
        return [x, y]
    }
    
    return {
        isWinner,
        receiveAttack,
        placeShip,
        playBoards,
        moveBoards,
        ships
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
