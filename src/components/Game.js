import React, {useState} from 'react';
import PlayBoard from './PlayBoard'
import MoveBoard from './MoveBoard'
import GameBoard from '../game/GameBoard'

const Game = () => {
    const test = GameBoard()
    test.placeShip(3, 'A1')
    test.receiveAttack('A2')
    const playerBoard = test
    // const [playerBoard, setPlayerBoard] = useState(test)
    return (
        <div>
           <PlayBoard board={playerBoard} />
           <MoveBoard board={playerBoard} /> 
        </div>
    );
}

export default Game;
