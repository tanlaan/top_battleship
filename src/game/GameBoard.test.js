import GameBoard from './GameBoard'
import Ship from './Ship'

const board = GameBoard()

test('GameBoard factory function is defined', () => {
    expect(GameBoard).toBeDefined()
})

test('A GameBoard object has a function called placeShip', () => {
    expect(board.placeShip).toBeDefined()
})

test('A GameBoard object has a playBoard for player and computer', () => {
    expect(board.playerPlayBoard).toBeDefined()
    expect(board.computerPlayBoard).toBeDefined()
})

test('A GameBoard object has a move board for player and computer', () => {
    expect(board.playerMoveBoard).toBeDefined()
    expect(board.computerMoveBoard).toBeDefined()
})

test('moveBoards will be initialized with 10 columns', () => {
    expect(board.playerMoveBoard.length).toBe(10)
    expect(board.computerMoveBoard.length).toBe(10)
})

test('moveBoards will be initialized with 10 rows', () => {
    expect(board.playerMoveBoard[0].length).toBe(10)
    expect(board.computerMoveBoard[0].length).toBe(10)
})

test('There should be a location to place the ships associated with a player and computer', () => {
    expect(board.playerShips).toBeDefined()
    expect(board.computerShips).toBeDefined()
})

test('Gameboard can place a ship onto a playboard', () => {
    board.placeShip(board.playerPlayBoard, board.playerShips, 3, 'A1')
    expect(board.playerPlayBoard['A1']).toBeDefined()
})

test('Placing a ship on a playBoard adds it to the ships array', () => {
    board.placeShip(board.playerPlayBoard, board.playerShips, 3, 'A1')
    expect(board.playerShips[0]).toBeDefined()
})

test("Placing a ship on a playBoard adds more than just the initial coordinate", () => {
    board.placeShip(board.playerPlayBoard, board.playerShips, 3, 'A1')
    expect(board.playerPlayBoard['A2']).toBeDefined()
})

test("Placing a ship on the playBoard works in the vertical orientation as well", () => {
    board.placeShip(board.playerPlayBoard, board.playerShips, 3, 'A1', 'V')
    expect(board.playerPlayBoard['B1']).toBeDefined()
})
