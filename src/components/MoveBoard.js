import React from 'react';
import BoardTable from './BoardTable';

const MoveBoard = (props) => {
    return (
        <div>
            <h3>Move Board:</h3>
            <BoardTable board={props.board.moveBoard}/>
        </div>
    );
}

export default MoveBoard;
