import React, {useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Game from './components/Game'

const App = () => {
  const [gameover, setGameover] = useState(false)
  const [winner, setWinner] = useState('')
  return (
    <div>
      <Header 
        gameover={gameover}
        winner={winner}
      />
      <Game 
        setGameover={setGameover}
        setWinner={setWinner}
      />
      <Footer />
    </div>
  );
}

export default App;
