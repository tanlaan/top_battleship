import coordinateToIntegers, {integersToCoordinate, getRandomInt} from './coordinates'

test('Convert a string form coordinate to two integers', () => {
    const [x, y] = coordinateToIntegers('0,0')
    expect(x).toEqual(0)
    expect(y).toEqual(0)
})

test('Converted coordinates have a type of number', () => {
    const [x, y] = coordinateToIntegers('0,0')
    expect(typeof x).toEqual('number')
    expect(typeof y).toEqual('number')
})

test('Given two integers, receive a coordinate string', () => {
    const coord = integersToCoordinate(0, 0)
    expect(coord).toEqual('0,0')
})

test('Random number is between 0 and max', () => {
    const num = getRandomInt(10)
    expect(num).toBeLessThan(10)
    expect(num).toBeGreaterThanOrEqual(0)
})