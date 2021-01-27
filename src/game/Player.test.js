import Player from './Player'
import GameBoard from './GameBoard'

test('Players can attack at a coordinate', () => {
    const myBoard = GameBoard()
   const enemyBoard = GameBoard()
    const human = Player(myBoard, enemyBoard)
    expect(human.attack('A1')).toBeTruthy()
})

test('Playing the same attack twice returns false', () => {
    const myBoard = GameBoard()
    const enemyBoard = GameBoard()
    const human = Player(myBoard, enemyBoard)
    human.attack('A1')
    expect(human.attack('A1')).toBeFalsy()
})

