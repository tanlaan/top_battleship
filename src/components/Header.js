import React from 'react'

const Header = ({gameover, winner}) => {
    return (
        <header>
            <h1>BattleShip: The Game</h1>
            <h2>Created by Chris Bolas</h2>
            {gameover && <h3>GAMEOVER</h3>}
            {winner && <h3>{winner} won!</h3>}
        </header>
    )
}

export default Header