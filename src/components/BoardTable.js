import React from 'react';

const BoardTable = (props) => {
    return (
        <table>
            <tbody>
                { props.board.map((x, i) => {
                    return (
                        <tr key={i}>
                            {x.map((y, j) => {
                                return (
                                    <td 
                                        key={j} 
                                        onClick={props.click 
                                            ? (e) => { props.click(i + ',' + j) }
                                            : ()=>{}}
                                    >
                                        {typeof(y) === 'function' && '[*]'}
                                        {typeof(y) === 'undefined' && '[ ]'}
                                        {typeof(y) === 'string' && '[' + y + ']'}
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
