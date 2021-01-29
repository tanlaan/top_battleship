import coordinateToIntegers, {integersToCoordinate} from './coordinates'

const Player = (myBoard, enemyBoard, computer=false) => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }
    const attack = (coordinate) => {
        let x
        let y

        if (computer) {

            // Until we find a new move, keep trying
            let goodMove = false
            while (!goodMove) {
                x = getRandomInt(10)
                y = getRandomInt(10)
                if (typeof myBoard.moveBoard[x][y] === 'undefined') {
                    goodMove = true
                }
            }
            
            // We found a new move
            coordinate = integersToCoordinate(x, y)
        } else {
            [x, y] = coordinateToIntegers(coordinate)
            
            // Player tried to attack the same place twice
            if (typeof myBoard.moveBoard[x][y] !== 'undefined') {
                return false
            }
        }
        
        const hit = 'X'
        const miss = '/'

        // Tell enemyBoard about our attack
        const hitStatus = enemyBoard.receiveAttack(coordinate)

        myBoard.moveBoard[x][y] = hitStatus ? hit : miss
        return true
    }
    
    return {
        attack
    }
}

export default Player
