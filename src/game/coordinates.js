const coordinateToIntegers = (coordinate) => {
    // Take in string form, convert to array integers
    let [x, y] = coordinate.split('')
    x = x.charCodeAt(0) - 'A'.charCodeAt(0)
    y = Number(y) - 1
    return [x, y]
}

export default coordinateToIntegers
