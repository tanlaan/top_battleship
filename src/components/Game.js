import React, {useEffect, useState} from 'react';
import PlayBoard from './PlayBoard'
import MoveBoard from './MoveBoard'
import GameBoard from '../game/GameBoard'
import Player from '../game/Player'

const Game = ({setGameover, setWinner}) => {
    // Placeholder:
    // Fixed ship locations
    const foo = GameBoard()
    foo.placeShip(3, '0,0')

    const bar = GameBoard()
    bar.placeShip(3, '0,0')
    // --------------------
    const [playerBoard, setPlayerBoard] = useState(foo)
    const [computerBoard, setComputerBoard] = useState(bar)
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

    useEffect(() => {
        if(playerBoard.isLoser()){
            setGameover(true)
            setWinner('Computer')
        } else if (computerBoard.isLoser()) {
            setGameover(true)
            setWinner('Player')
        }
    }, [playerBoard, computerBoard, setGameover, setWinner]);

    return (
        <div>
            <MoveBoard board={playerBoard} click={clickHandler}/> 
            <PlayBoard board={playerBoard} />
        </div>
    );
}

export default Game;
