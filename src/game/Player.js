const Player = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }
    const attack = (myBoard, enemyBoard, coordinate) => {
        let x
        let y

        if (coordinate) {
            [x, y] = coordinate.split(',')
            
            // Player tried to attack the same place twice
            if (typeof myBoard.moveBoard[x][y] !== 'undefined') {
                return false
            }
        } else {
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
            //
            // Look more into this, it seems like I am polluting
            // the global namespace here?
            coordinate = x + ',' + y
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
