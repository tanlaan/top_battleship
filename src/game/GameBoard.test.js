import GameBoard from './GameBoard'

test('GameBoard factory function is defined', () => {
    expect(GameBoard).toBeDefined()
})

test('A GameBoard object has a function called placeShip', () => {
    const board = GameBoard()
    expect(board.placeShip).toBeDefined()
})

test('A GameBoard object has a playBoard for player and computer', () => {
    const board = GameBoard()
    expect(board.playBoard).toBeDefined()
})

test('A GameBoard object has a move board for player and computer', () => {
    const board = GameBoard()
    expect(board.moveBoard).toBeDefined()
})

test('moveBoards will be initialized with 10 columns', () => {
    const board = GameBoard()
    expect(board.moveBoard.length).toBe(10)
})

test('moveBoards will be initialized with 10 rows', () => {
    const board = GameBoard()
    expect(board.moveBoard[0].length).toBe(10)
})

test('Gameboard can place a ship onto a playboard', () => {
    const board = GameBoard()
    board.placeShip(3, 'A1')
    expect(board.playBoard[0][0]).toBeDefined()
})

test("Placing a ship on a playBoard adds more than just the initial coordinate", () => {
    const board = GameBoard()
    board.placeShip(3, 'A1')
    expect(board.playBoard[1][0]).toBeDefined()
})

test("Placing a ship on the playBoard works in the vertical orientation as well", () => {
    const board = GameBoard()
    board.placeShip(3, 'A1', 'V')
    expect(board.playBoard[0][1]).toBeDefined()
})

test("Placing a ship on the playBoard in an invalid location returns false", () => {
    const board = GameBoard()
    let value = board.placeShip(3, 'K1', 'V')
    expect(value).toBeFalsy()
})

test('Placing a ship where it would overlap another returns false', () => {
    const board = GameBoard()
    board.placeShip(3, 'A1')
    let value = board.placeShip(3, 'A1')
    expect(value).toBeFalsy()
})

test('receiveAttack records a miss to the playBoard if miss', () => {
    const board = GameBoard()
    const coordinate = 'A1'
    board.receiveAttack( coordinate )
    expect(board.playBoard[0][0]).toBe('/')
})

test('recieveAttack works if a hit should take place', () => {
    const myBoard = GameBoard()
    const coordinate = 'A1'
    myBoard.placeShip(3, coordinate)
    myBoard.receiveAttack(coordinate)
    expect(myBoard.playBoard[0][0]).toBe('X')
})

test('isWinner return true if all ships sunk', () => {
    const board = GameBoard()
    const coordinate = 'A1'
    board.placeShip( 1, coordinate)
    board.receiveAttack( coordinate)
    expect(board.isLoser()).toBeTruthy()

})

test('The factory function can take a GameBoard in order to return a copy', () => {
    const board = GameBoard()
    board.placeShip(1, 'A1')

    // Manually set move to a miss statesd
    board.moveBoard[0][1] = '/'
    const fooBoard = GameBoard(board)

    // Don't believe there is a valid way to test function equality here
    expect(fooBoard.playBoard).toEqual(board.playBoard)
    expect(fooBoard.moveBoard).toEqual(board.moveBoard)
    expect(fooBoard.ships).toEqual(board.ships)
})