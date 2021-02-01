import React, {useState} from 'react';
import PlayBoard from './PlayBoard'
import MoveBoard from './MoveBoard'
import GameBoard from '../game/GameBoard'
import Player from '../game/Player'

const Game = () => {
    const [gameover, setGameover] = useState(false)
    const [winner, setWinner] = useState('')
    const [playerBoard, setPlayerBoard] = useState(GameBoard())
    const [computerBoard, setComputerBoard] = useState(GameBoard())
    const human = Player()
    const computer = Player()

    const clickHandler = (coordinate) => {
        const intPlayer = GameBoard(playerBoard)
        const intComputer = GameBoard(computerBoard)
        if(human.attack(intPlayer, intComputer, coordinate)) {
            setPlayerBoard(intPlayer)
            setComputerBoard(intComputer)
        }
    }

    return (
        <div>
            <MoveBoard board={playerBoard} click={clickHandler}/> 
            <PlayBoard board={playerBoard} />
        </div>
    );
}

export default Game;
