import React from 'react';

const BoardTable = (props) => {
    const getClass = (character) => {
        if (typeof(character) === 'function') {
            return 'ship'
        } else if (character === '/') {
            return 'miss'
        } else if (character === 'X') {
            return 'hit'
        } else {
            return ''
        }
    }
    return (
        <table>
            <tbody>
                { props.board.map((x, i) => {
                    return (
                        <tr key={i}>
                            {x.map((y, j) => {
                                return (
                                    <td
                                        className={getClass(y)}
                                        key={j} 
                                        onClick={props.click 
                                            ? (e) => { props.click(i + ',' + j) }
                                            : ()=>{}}
                                    >
                                        {typeof(y) === 'function' && '*'}
                                        {typeof(y) === 'undefined' && ''}
                                        {typeof(y) === 'string' && y}
                                    </td> 
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default BoardTable;
