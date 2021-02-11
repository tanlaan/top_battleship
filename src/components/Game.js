import React, {useEffect, useState} from 'react';
import PlayBoard from './PlayBoard'
import MoveBoard from './MoveBoard'
import GameBoard from '../game/GameBoard'
import Player from '../game/Player'

const Game = ({gameover, setGameover, setWinner}) => {
    // Randomized Boards
    const initGameBoard = () => {
        const board = GameBoard()
        board.placeShipRandomly(5)
        board.placeShipRandomly(4)
        board.placeShipRandomly(3)
        board.placeShipRandomly(3)
        board.placeShipRandomly(2)
        return board
    }

    const [playerBoard, setPlayerBoard] = useState(initGameBoard())
    const [computerBoard, setComputerBoard] = useState(initGameBoard())
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
