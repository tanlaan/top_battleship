
const Player = (myBoard, enemyBoard, computer=false) => {
    const attack = (coordinate) => {
        // Check my move board to not double attack
        //  if already tried return false
        // Attack enemy and receive hit or miss
        // Write to move board with 'X' or '/'
        //return true
        if (computer) {
        }
        

        let [x, y] = coordinate.split('')
        x = x.charCodeAt(0) - 'A'.charCodeAt(0)
        
        if (typeof myBoard.moveBoard[x][y] !== 'undefined') {
            return false
        }

        const hit = 'X'
        const miss = '/'
        const hitStatus = enemyBoard.receiveAttack(coordinate)

        myBoard.moveBoard[x][y] = hitStatus ? hit : miss
        return true
    }
    
    return {
        attack
    }
}

export default Player
