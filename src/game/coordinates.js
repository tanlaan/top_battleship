const coordinateToIntegers = (coordinate) => {
    // Take in string form, convert to array integers
    let [x, y] = coordinate.split(',')
    x = Number(x)
    y = Number(y)
    return [x, y]
}

export const integersToCoordinate = (x, y) => {
    x = String(x)
    y = String(y)
    return x + ',' + y
}

export const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

export default coordinateToIntegers