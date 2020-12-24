import GameBoard from './GameBoard'

test('GameBoard factory function is defined', () => {
    expect(GameBoard).toBeDefined()
})

test('A GameBoard object has a function called placeShip', () => {
    const board = GameBoard()
    expect(board.placeShip).toBeDefined()
})

test('A GameBoard object has an aray of playBoards', () => {
    const board = GameBoard()
    expect(board.playBoards).toBeDefined()
})

