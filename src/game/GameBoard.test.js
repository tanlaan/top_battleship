import GameBoard from './GameBoard'
import Ship from './Ship'

test('GameBoard factory function is defined', () => {
    expect(GameBoard).toBeDefined()
})

test('A GameBoard object has a function called placeShip', () => {
    const board = GameBoard()
    expect(board.placeShip).toBeDefined()
})

test('A GameBoard object has a playBoard for player and computer', () => {
    const board = GameBoard()
    expect(board.playBoards[0]).toBeDefined()
    expect(board.playBoards[1]).toBeDefined()
})

test('A GameBoard object has a move board for player and computer', () => {
    const board = GameBoard()
    expect(board.moveBoards[0]).toBeDefined()
    expect(board.moveBoards[1]).toBeDefined()
})

test('moveBoards will be initialized with 10 columns', () => {
    const board = GameBoard()
    expect(board.moveBoards[0].length).toBe(10)
    expect(board.moveBoards[1].length).toBe(10)
})

test('moveBoards will be initialized with 10 rows', () => {
    const board = GameBoard()
    expect(board.moveBoards[0][0].length).toBe(10)
    expect(board.moveBoards[1][0].length).toBe(10)
})

test('There should be a location to place the ships associated with a player and computer', () => {
    const board = GameBoard()
    expect(board.ships[0]).toBeDefined()
    expect(board.ships[1]).toBeDefined()
})

test('Gameboard can place a ship onto a playboard', () => {
    const board = GameBoard()
    const player = 0
    board.placeShip(player, 3, 'A1')
    expect(board.playBoards[player]['A1']).toBeDefined()
})

test('Placing a ship on a playBoard adds it to the ships array', () => {
    const board = GameBoard()
    const player = 0
    board.placeShip(player, 3, 'A1')
    expect(board.ships[player][0]).toBeDefined()
})

test("Placing a ship on a playBoard adds more than just the initial coordinate", () => {
    const board = GameBoard()
    const player = 0
    board.placeShip(player, 3, 'A1')
    expect(board.playBoards[player]['B1']).toBeDefined()
})

test("Placing a ship on the playBoard works in the vertical orientation as well", () => {
    const board = GameBoard()
    const player = 0
    board.placeShip(player, 3, 'A1', 'V')
    expect(board.playBoards[player]['A2']).toBeDefined()
})

test("Placing a ship on the playBoard in an invalid location returns false", () => {
    const board = GameBoard()
    const player = 0
    let value = board.placeShip(player, 3, 'K1', 'V')
    expect(value).toBeFalsy()
})

test('Placing a ship where it would overlap another returns false', () => {
    const board = GameBoard()
    const player = 0
    board.placeShip(player, 3, 'A1')
    let value = board.placeShip(player, 3, 'A1')
    expect(value).toBeFalsy()
})

test('receiveAttack records a miss to the moveBoard if miss', () => {
    const board = GameBoard()
    const player = 0
    const coordinate = 'A1'
    board.receiveAttack( player, coordinate )
    expect(board.moveBoards[player][0][0]).toBe('/')
})

test('recieveAttack works if a hit should take place', () => {
    const board = GameBoard()
    const player = 0
    const opponent = 1
    const coordinate = 'A1'
    board.placeShip(opponent, 3, coordinate)
    board.receiveAttack(player, coordinate)
    expect(board.moveBoards[player][0][0]).toBe('X')
})

test('isWinner return true if all ships sunk', () => {
    const board = GameBoard()
    const player = 0
    const opponent = 1
    const coordinate = 'A1'
    board.placeShip(player, 1, coordinate)
    board.placeShip(opponent, 1, coordinate)
    board.receiveAttack(player, coordinate)
    expect(board.isWinner()).toBeTruthy()

})
