import React from 'react';
import BoardTable from './BoardTable'

const PlayBoard = (props) => {
    return (
        <div>
            <h3>Play Board:</h3>
            <BoardTable board={props.board.playBoard}/>
        </div>
    );
}

export default PlayBoard;
