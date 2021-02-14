import React from 'react';
import BoardTable from './BoardTable';

const MoveBoard = (props) => {
    return (
        <div className='moveBoard'>
            <h3>Move Board:</h3>
            <BoardTable board={props.board.moveBoard} click={props.click}/>
        </div>
    );
}

export default MoveBoard;
