import React, {useEffect, useState} from 'react';
import PlayBoard from './PlayBoard'
import MoveBoard from './MoveBoard'
import GameBoard from '../game/GameBoard'
import Player from '../game/Player'

const Game = ({gameover, setGameover, setWinner}) => {
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
    const [playerTurn, setPlayerTurn] = useState(true)

    const clickHandler = (coordinate) => {
        const intPlayer = GameBoard(playerBoard)
        const intComputer = GameBoard(computerBoard)
        if(human.attack(intPlayer, intComputer, coordinate)) {
            setPlayerBoard(intPlayer)
            setComputerBoard(intComputer)
            setPlayerTurn(false)
        }
    }

    useEffect(() => {
        // Update winner state after each move
        if(playerBoard.isLoser()){
            setGameover(true)
            setWinner('Computer')
        } else if (computerBoard.isLoser()) {
            setGameover(true)
            setWinner('Player')
        }
    }, [playerBoard, computerBoard, setGameover, setWinner]);

    useEffect(() => {
        // Computer's turn
        if(!playerTurn && !gameover) {
            const intPlayer = GameBoard(playerBoard)
            const intComputer = GameBoard(computerBoard)
            computer.attack(intComputer, intPlayer)
            setComputerBoard(intComputer)
            setPlayerBoard(intPlayer)
            setPlayerTurn(true)
        }
    }, [computer, gameover, playerBoard, computerBoard, playerTurn, setPlayerTurn])
    
    return (
        <div>
            <MoveBoard board={playerBoard} click={clickHandler}/> 
            <PlayBoard board={playerBoard} />
        </div>
    );
}

export default Game;
