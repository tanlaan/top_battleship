import Ship from './Ship'

test('A factory function named Ship is defined', () => {
    expect(Ship).toBeDefined()
})

// test('Given a name, Ship stores it in a .name', () => {
//     const destroyer = Ship('Destroyer')
//     expect(destroyer.name).toBe('Destroyer')
// })

test('Given a length, Ship stores it in a .length', () => {
    const destroyer = Ship(3)
    expect(destroyer.length).toBe(3)
})

test("Ships have an array to store where they've been hit", () => {
    const destroyer = Ship(3)
    expect(destroyer.hits).toBeDefined()
})

test("Ships have a function named hit defined", () => {
    const destroyer = Ship(3)
    expect(destroyer.hit).toBeDefined()
})

test("Ships have a function named isSunk defined", () => {
    const destroyer = Ship(3)
    expect(destroyer.isSunk).toBeDefined()
})

test("Ships hits array should be of length length", () => {
    const destroyer = Ship(4)
    expect(destroyer.hits.length).toBe(4)
})

test('Hit will place a marking x at hit location', () => {
    const destroyer = Ship(3)
    destroyer.hit(1)
    expect(destroyer.hits[1]).toBe('x')
})

test('If all places have been hit, ship returns true on isSunk()', () => {
    const destroyer = Ship(3)
    destroyer.hit(0)
    destroyer.hit(1)
    destroyer.hit(2)
    expect(destroyer.isSunk()).toBe(true)
})