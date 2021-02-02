import Player from './Player'
import GameBoard from './GameBoard'

test('Players can attack at a coordinate', () => {
    const myBoard = GameBoard()
    const enemyBoard = GameBoard()
    const human = Player()
    expect(human.attack(myBoard, enemyBoard, '0,0')).toBeTruthy()
})

test('Playing the same attack twice returns false', () => {
    const myBoard = GameBoard()
    const enemyBoard = GameBoard()
    const human = Player()
    human.attack(myBoard, enemyBoard, '0,0')
    expect(human.attack(myBoard, enemyBoard, '0,0')).toBeFalsy()
})


test('Computers can make a valid random move', () => {
    const humanBoard = GameBoard()
    const computerBoard = GameBoard()
    const computer = Player()
    const success = computer.attack(computerBoard, humanBoard)
    expect(success).toBeTruthy()
})
